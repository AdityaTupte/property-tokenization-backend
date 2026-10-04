import { prisma } from "../../prismaclient";
import type { Vote } from "../../Redis/RedisStream/RedisStreamClasses";


    export const VotingForPropsal = async (
    VotingData : Vote[]
    ) => {

        try {
            const Votes = await prisma.votingForProposal.createMany({
                data:VotingData
            })
            

        } catch (error) {
            throw new Error("Failed to insert votes:");
        }

    };
