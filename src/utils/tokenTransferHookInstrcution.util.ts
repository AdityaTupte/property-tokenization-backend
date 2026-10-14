import bs58 from "bs58";

export function decodeExecuteInstruction(data: string): string {
  const decoded = Buffer.from(bs58.decode(data));

  if (decoded.length < 8) {
    throw new Error("Invalid instruction data");
  }

  return decoded.subarray(0, 8).toString("hex");
}
