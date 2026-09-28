import { KMSClient } from "@aws-sdk/client-kms";
import { KmsService } from "../utils/KmsService";


const kms = new KMSClient({
    region: process.env.REGION,
});

const keyId = process.env.KMS_KEY_ID;

export const ConnectToKMS = new KmsService(kms, keyId!);

export const ConnectToKMSFunction = async() =>{

    await ConnectToKMS.getPublicKey();

}


