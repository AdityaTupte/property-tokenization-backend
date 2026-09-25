import type { CompletedExecution } from "../../types&interface/solanaLogParser.interface";
import { snapshotRequestedQueue } from "../server&queues";

export const snapshotRequestedJobCreationHandler = async (
  data: CompletedExecution
) => {


    const job = snapshotRequestedQueue.add(
      "create-merkle-root",
      {
       data:data 
      },
      {
        attempts:4,  
      }
    )


  // TODO Create a two table for token holdr and token history
  // TODO create a kakfa topic for transfer proposal to keep tracjk of balance
  /*      use batch wise proess of leaves ,poarent and eroots
        to store the data of token balcne schaneg use redis 
        maintain  a table whre we store data of mini number of slot required 
        
        
        
        
 */
};





