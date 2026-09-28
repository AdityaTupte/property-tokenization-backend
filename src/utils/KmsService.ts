import { GetPublicKeyCommand, SignCommand, type KMSClient } from "@aws-sdk/client-kms";
import { InfrastructureError } from "./errors/InfraBaseErrorClass";
import crypto from "crypto"
import {
  PublicKey,
} from "@solana/web3.js";
export class KmsService {
    private readonly kms: KMSClient;
    private readonly keyId: string;
    private kmsPublicKeyDer!: Buffer<ArrayBuffer>;
    private authority! : PublicKey;

    constructor(kms: KMSClient, keyId: string) {
        this.kms = kms;
        this.keyId = keyId;
    }


    getAuthority():PublicKey{

        return this.authority;

    }


    async getPublicKey() {
        try {
            const result = await this.kms.send(
                new GetPublicKeyCommand({
                    KeyId: this.keyId,
                })
            );

            if (!result.PublicKey) {
                throw new Error("KMS public key was empty");
            }

            
             this.kmsPublicKeyDer = Buffer.from(
            result.PublicKey
            );
            
            // Ed25519 raw public key = last 32 bytes
            const rawPublicKey =
            this.kmsPublicKeyDer.subarray(
            this.kmsPublicKeyDer.length - 32
            );
    
             this.authority = new PublicKey(rawPublicKey);

        } catch (error) {
            throw new InfrastructureError(
                "KMS public key was not returned",
                "",
                {
                    cause: error,
                }
            );
        }
    }

    async SignAndVerify(message:Buffer):Promise<Buffer> {    
        
        try {
            const result = await this.kms.send(
                  new SignCommand({
                    KeyId: process.env.
                    KMS_KEY_ID,
                
                    Message: message,
                     
                    MessageType: "RAW",
                
                    SigningAlgorithm:
                      "ED25519_SHA_512",
                  })
                );
    
                
              if (!result.Signature) {
          throw new InfrastructureError(
            "KMS signature was empty",
            ""
          );
        }

         const signature =
              Buffer.from(result.Signature);
            
            
            const valid =
              crypto.verify(
                null,
                message,
                {
                  key: this.kmsPublicKeyDer,
                  format: "der",
                  type: "spki",
                },
                signature
              );
            
            if (!valid) {
              throw new Error(
                "KMS signature verification FAILED"
              );
            }
    
        return Buffer.from(result.Signature);

        } catch (error) {
            

            throw new InfrastructureError(
                "kms unable to sign ",
                "",
                {
                    cause:error,
                    retryable:false,
                }
            )


        }
    }


}
