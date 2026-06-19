import { app } from "../app.js";
import { connectionDB } from "../prismaclient.js";
connectionDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port :
                ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log("errororrrr", err);
});
//# sourceMappingURL=databaseconnection.js.map