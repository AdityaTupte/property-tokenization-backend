import { SolanaService } from "../utils/solanaService";
import {Connection} from "@solana/web3.js"



const connection  = new Connection(process.env.RPC_URL!,"confirmed")

export const SolanaServiceForSignature  = new SolanaService(connection) 