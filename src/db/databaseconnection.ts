// import "dotenv/config";
import  app  from "../app.js";

import { connectionDB } from "../prismaclient.js";


export const DatabaseConnection =  connectionDB().then(
    ()=>{
        const server = app.listen(process.env.PORT || 8000, ()=>{
             console.log(`server is running at port :
                ${process.env.PORT}`
             );
        })


        server.on("error", (error) => {
            console.log("ERROR:", error);
            throw error;
        });
    }
).catch((err)=>{
    console.log("errororrrr",err)   
});



