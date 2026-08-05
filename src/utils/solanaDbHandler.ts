import { PrismaClient } from "../generated/prisma/client";
import { prisma } from "../prismaclient";

export type Tx = Parameters<
    Parameters<PrismaClient["$transaction"]>[0]
>[0];


export class TransactionContext {
    operations: ((tx:Tx) => Promise<void>)[] = [];

    add(op: (tx: Tx) => Promise<void>) {
        this.operations.push(op);
    }

    async execute() {
        await prisma.$transaction(async (tx:Tx) => {
            for (const op of this.operations) {
                await op(tx);
            }
        });
    }
}