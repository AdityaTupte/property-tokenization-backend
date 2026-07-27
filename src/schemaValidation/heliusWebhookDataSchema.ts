import z from "zod";

export const instructionsSchema  = z.array(
                z.object({
                    accounts: z.array(z.number()),
                    data: z.string(),
                    programIdIndex: z.number(),
                    stackHeight: z.number().optional(),
                })
            ) 

export const messageSchema = z.object({
                accountKeys : z.array(z.string()),
                instructions : instructionsSchema             
            })

export const HeliusWebhookSchema = z.object({
    signature:z.string(),

    transaction : z.object({
        blockTime : z.number(),
        slot:z.number(),
        version:z.string(),

        transaction:z.object({
            message:messageSchema
            
        })
    })
})


export default instructionsSchema;

