import fs from "fs";
import path from "path";


function mapType(type: string): string {
    switch (type) {
        case "string":
            return "z.string()";

        case "bool":
            return "z.boolean()";

        case "u8":
            return "z.number().int().min(0).max(255)";

        case "u16":
        case "u32":
            return "z.number().int()";

        case "u64":
        case "u128":
        case "i64":
            return "z.bigint()";

        case "pubkey":
            return "z.string()";

        default:
            return "z.any()";
    }
}




const idl = JSON.parse(
    fs.readFileSync("./src/idl/property_tokenization.json", "utf8")
);


const outputDir = path.join(process.cwd(),"src","idl","generated");

fs.rmSync(outputDir, {
  recursive: true,
  force: true,
});

fs.mkdirSync(outputDir, { recursive: true });


let index = "";

for (const instruction of idl.instructions){

    let schema:string = `import {z} from "zod"\n\n`;

    schema += `export const ${instruction.name}Schema = z.object({\n`;

    for(const arg of instruction.args){

        schema += `          ${arg.name} : ${mapType(arg.type)},\n`;

    }

    schema += "});";

    fs.writeFileSync(
          path.join(outputDir, `${instruction.name}.schema.ts`),
        schema
    )
    

  

}

let imports = "";
let object = "";

    for (const instruction of idl.instructions) {

        imports += `import { ${instruction.name}Schema } from "./${instruction.name}.schema";\n`;

        object += `    ${instruction.name}: ${instruction.name}Schema,\n`;

    }

    const schemas = `
    ${imports}

    export const Schemas = {
    ${object}};
    `;

    fs.writeFileSync(
        path.join(outputDir, "schemas.ts"),
        schemas
    );




let registry = `import { Schemas } from "./schemas";\n\n`;

registry += `export const InstructionRegistry = new Map([\n`;

for (const instruction of idl.instructions) {

    const discriminator = Buffer
    .from(instruction.discriminator)
    .toString("hex");

    registry += `
    [
        "${discriminator}",
        {
            name: "${instruction.name}",
            schema: Schemas["${instruction.name}"],
        },
    ],
`;

}

registry += "]);";

fs.writeFileSync(
    path.join(outputDir, "instructionRegistry.ts"),
    registry
);