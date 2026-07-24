import { createHelius } from "helius-sdk";

  const apiKey = process.env.HELIUS_KEY; // From Helius dashboard
 export const helius = createHelius({ apiKey });

export const heliusConnection =async () => {


  
  if(!apiKey) console.log("missing api key");
  

  try {
    
    const assets = await helius.getAssetsByOwner({
      ownerAddress: "DdwqwHJW5om5r6G51cY8aUBpjUt2xMwYcqm2tLKUgUFz",
      page: 1,
      limit: 50,
      sortBy: { sortBy: "created", sortDirection: "asc" },}
    );
  console.log(assets);
  } catch (error) {
    console.error("Error:", error);
  }
};
