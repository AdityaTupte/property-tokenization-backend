async function saveMerkleProofs(
  snapshotId: string,
  holders: Holder[],
  proofs: MerkleProof[]
) {
  const rows = [];

  for (
    let i = 0;
    i < holders.length;
    i++
  ) {
    const holder = holders[i];
    const proof = proofs[i];

    for (
      let proofIndex = 0;
      proofIndex < proof.length;
      proofIndex++
    ) {
      rows.push({
        snapshotId,
        holder: holder.holder.toBase58(),
        leafIndex: i,
        proofIndex,
        hash: proof[proofIndex],
      });
    }
  }

  await prisma.merkleProof.createMany({
    data: rows,
  });
}




async function createMerkleSnapshot(
  snapshotId: string,
  holders: Holder[],
  proposal: PublicKey,
  governanceMint: PublicKey,
  slot: bigint
) {
  // -----------------------------
  // 1. Build leaves
  // -----------------------------

  const leaves = buildLeaves(
    holders,
    proposal,
    governanceMint
  );

  // -----------------------------
  // 2. Build tree
  // -----------------------------

  const tree = buildMerkleTree(
    leaves
  );

  // ROOT IS AVAILABLE NOW
  const root = tree.root;

  // -----------------------------
  // 3. Generate proofs
  //    from existing levels
  // -----------------------------

  const proofs =
    buildAllMerkleProofs(tree);

  // -----------------------------
  // 4. Save holder indexes
  // -----------------------------

  await saveHolderIndexes(
    snapshotId,
    holders
  );

  // -----------------------------
  // 5. Save proofs
  // -----------------------------

  await saveMerkleProofs(
    snapshotId,
    holders,
    proofs
  );

  // -----------------------------
  // 6. Save root in DB
  // -----------------------------

  await saveMerkleSnapshot(
    snapshotId,
    root,
    slot
  );

  // -----------------------------
  // 7. Return root
  // -----------------------------

  return root;
}



function buildAllMerkleProofs(
  tree: MerkleTree
): MerkleProof[] {
  return tree.leaves.map(
    (_, index) =>
      buildMerkleProof(tree, index)
  );
}



function buildMerkleProof(
  tree: MerkleTree,
  leafIndex: number
): MerkleProof {
  if (
    leafIndex < 0 ||
    leafIndex >= tree.levels[0].length
  ) {
    throw new Error(
      `Leaf index ${leafIndex} is out of range`
    );
  }

  const proof: Buffer[] = [];

  let currentIndex = leafIndex;

  for (
    let levelIndex = 0;
    levelIndex < tree.levels.length - 1;
    levelIndex++
  ) {
    const originalLevel =
      tree.levels[levelIndex];

    /*
     * The tree-building step duplicates the
     * last node when the level is odd.
     *
     * Do the same here only for LOOKUP.
     * We are NOT hashing anything.
     */
    const level =
      originalLevel.length % 2 === 1
        ? [
            ...originalLevel,
            originalLevel[
              originalLevel.length - 1
            ],
          ]
        : originalLevel;

    const siblingIndex =
      currentIndex % 2 === 0
        ? currentIndex + 1
        : currentIndex - 1;

    proof.push(
      Buffer.from(
        level[siblingIndex]
      )
    );

    currentIndex =
      Math.floor(currentIndex / 2);
  }

  return proof;
}



function buildMerkleTree(
  leaves: ReadonlyArray<Buffer | Uint8Array>
): MerkleTree {
  if (leaves.length === 0) {
    throw new Error(
      "Cannot build Merkle tree from zero leaves"
    );
  }

  const levels: Buffer[][] = [];

  // Level 0 = leaves
  let level: Buffer[] = leaves.map(
    (leaf) => Buffer.from(leaf)
  );

  levels.push(level);

  while (level.length > 1) {

    // If odd, duplicate last node
    if (level.length % 2 === 1) {
      level = [
        ...level,
        Buffer.from(
          level[level.length - 1]
        ),
      ];
    }

    const nextLevel: Buffer[] = [];

    for (
      let i = 0;
      i < level.length;
      i += 2
    ) {
      const left = level[i];
      const right = level[i + 1];

      nextLevel.push(
        hashPair(left, right)
      );
    }

    level = nextLevel;

    levels.push(level);
  }

  return {
    levels,
    root: level[0],
  };
}




import { PublicKey } from "@solana/web3.js";
import { keccak_256 } from "@noble/hashes/sha3";
import BN from "bn.js";

type Holder = {
  holder: PublicKey;
  votingPower: number | bigint | BN;
};

type MerkleTree = {
  levels: Buffer[][];
  root: Buffer;
};

type MerkleProof = Buffer[];


/* ---------------------------------- */
/* Helpers                            */
/* ---------------------------------- */

function toU64LeBuffer(
  value: number | bigint | BN
): Buffer {
  if (BN.isBN(value)) {
    return value.toArrayLike(Buffer, "le", 8);
  }

  const buffer = Buffer.alloc(8);

  buffer.writeBigUInt64LE(
    BigInt(value)
  );

  return buffer;
}


function keccakBuffer(
  parts: ReadonlyArray<Buffer | Uint8Array>
): Buffer {
  return Buffer.from(
    keccak_256(
      Buffer.concat(
        parts.map((part) =>
          Buffer.from(part)
        )
      )
    )
  );
}


/*
 * Hash pair using SORTED order.
 *
 * hash(A, B) == hash(B, A)
 */
function hashPair(
  left: Buffer,
  right: Buffer
): Buffer {
  const [first, second] =
    Buffer.compare(left, right) <= 0
      ? [left, right]
      : [right, left];

  return keccakBuffer([
    first,
    second,
  ]);
}


/* ---------------------------------- */
/* Leaf                              */
/* ---------------------------------- */

function buildSellProposalLeaf(
  holder: PublicKey,
  proposal: PublicKey,
  governanceMint: PublicKey,
  votingPower: number | bigint | BN
): Buffer {
  return keccakBuffer([
    Buffer.from("SELLPROPERTY"),
    holder.toBuffer(),
    proposal.toBuffer(),
    governanceMint.toBuffer(),
    toU64LeBuffer(votingPower),
  ]);
}


/* ---------------------------------- */
/* Build leaves                       */
/* ---------------------------------- */

function buildLeaves(
  holders: Holder[],
  proposal: PublicKey,
  governanceMint: PublicKey
): Buffer[] {
  return holders.map((holder) =>
    buildSellProposalLeaf(
      holder.holder,
      proposal,
      governanceMint,
      holder.votingPower
    )
  );
}


model MerkleNode {
  snapshotId String
  level      Int
  nodeIndex  BigInt
  hash       Bytes

  @@id([snapshotId, level, nodeIndex])
  @@index([snapshotId, level])
}


model MerkleSnapshot {
  id             String   @id
  mint           String
  proposal       String
  governanceMint String
  slot           BigInt
  root           Bytes
  createdAt      DateTime @default(now())

  @@index([mint, slot])
}



model MerkleProof {
  snapshotId String
  holder     String
  leafIndex  BigInt
  proofIndex Int
  hash       Bytes

  @@id([snapshotId, holder, proofIndex])
  @@index([snapshotId, holder])
}