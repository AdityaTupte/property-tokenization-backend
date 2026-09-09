import fs from "fs";
import path from "path";


// ============================================================
// TYPE MAPPING
// ============================================================

function mapType(type: any): string {

    // Primitive type
    if (typeof type === "string") {

        switch (type) {

            case "string":
                return "z.string()";

            case "bool":
                return "z.boolean()";

            case "u8":
                return "z.number().int().min(0).max(255)";

            case "i8":
                return "z.number().int().min(-128).max(127)";

            case "u16":
                return "z.number().int().min(0).max(65535)";

            case "i16":
                return "z.number().int()";

            case "u32":
                return "z.number().int().min(0)";

            case "i32":
                return "z.number().int()";

            case "u64":
            case "u128":
            case "u256":
            case "i64":
            case "i128":
            case "i256":
                return 'z.any().transform((val) => BigInt(val.toString()))';

            case "f32":
            case "f64":
                return "z.number()";

            case "pubkey":
                return "z.string()";

            default:
                // Defined/custom type
                return "z.any()";
        }
    }


    // ========================================================
    // OPTION
    // ========================================================

    if (type.option !== undefined) {

        return `${mapType(type.option)}.nullable()`;
    }


    // ========================================================
    // VECTOR
    // ========================================================

    if (type.vec !== undefined) {

        return `z.array(${mapType(type.vec)})`;
    }


    // ========================================================
    // ARRAY
    // ========================================================

    if (type.array !== undefined) {

        const [elementType, length] = type.array;

        return `z.array(${mapType(elementType)}).length(${length})`;
    }


    // ========================================================
    // DEFINED TYPE
    // ========================================================

    if (type.defined !== undefined) {

        return "z.any()";
    }


    // ========================================================
    // HASHMAP
    // ========================================================

    if (type.hashMap !== undefined) {

        return "z.record(z.string(), z.any())";
    }


    // ========================================================
    // UNKNOWN
    // ========================================================

    return "z.any()";
}


// ============================================================
// LOAD IDL
// ============================================================

const idlPath = path.join(
    process.cwd(),
    "src",
    "idl.schema",
    "SolanaProgramHelper",
    "property_tokenization.json"
);

const idl = JSON.parse(
    fs.readFileSync(idlPath, "utf8")
);


// ============================================================
// OUTPUT DIRECTORY
// ============================================================

const outputDir = path.join(
    process.cwd(),
    "src",
    "idl.schema",
    "generated"
);

if (!fs.existsSync(outputDir)) {

    fs.mkdirSync(outputDir, {
        recursive: true,
    });
}


// ============================================================
// INSTRUCTION SCHEMAS
// ============================================================

for (const instruction of idl.instructions ?? []) {

    let schema =
        `import { z } from "zod";\n\n`;

    schema +=
        `export const ${instruction.name}Schema = z.object({\n`;

    for (const arg of instruction.args ?? []) {

        schema +=
            `    ${arg.name}: ${mapType(arg.type)},\n`;
    }

    schema +=
        "});";

    fs.writeFileSync(
        path.join(
            outputDir,
            `${instruction.name}.schema.ts`
        ),
        schema
    );
}


// ============================================================
// INSTRUCTION SCHEMAS OBJECT
// ============================================================

let imports = "";
let object = "";

for (const instruction of idl.instructions ?? []) {

    imports +=
        `import { ${instruction.name}Schema } from "./${instruction.name}.schema";\n`;

    object +=
        `    ${instruction.name}: ${instruction.name}Schema,\n`;
}

const schemas =
`${imports}

export const Schemas = {
${object}};
`;

fs.writeFileSync(
    path.join(
        outputDir,
        "schemas.ts"
    ),
    schemas
);


// ============================================================
// INSTRUCTION REGISTRY
// ============================================================

let registry =
    `import { Schemas } from "./schemas";\n\n`;

registry +=
    `export const InstructionRegistry = new Map([\n`;

for (const instruction of idl.instructions ?? []) {

    const discriminator =
        Buffer
            .from(instruction.discriminator)
            .toString("hex");


    // --------------------------------------------------------
    // ACCOUNTS
    // --------------------------------------------------------

    const accounts = (instruction.accounts ?? [])
        .map((account: any) => {

            return `{
                name: "${account.name}",
                writable: ${account.writable ?? false},
                signer: ${account.signer ?? false}
            }`;
        })
        .join(",\n");


    // --------------------------------------------------------
    // REGISTRY ENTRY
    // --------------------------------------------------------

    registry += `
    [
        "${discriminator}",
        {
            name: "${instruction.name}",
            schema: Schemas["${instruction.name}"],
            accounts: [
                ${accounts}
            ],
        },
    ],
`;
}

registry +=
    "]);";

fs.writeFileSync(
    path.join(
        outputDir,
        "instructionRegistry.ts"
    ),
    registry
);


// ============================================================
// EVENT SCHEMAS
// ============================================================

for (const event of idl.events ?? []) {

    // --------------------------------------------------------
    // IMPORTANT:
    //
    // New Anchor IDL:
    //
    // idl.events:
    // {
    //     name,
    //     discriminator
    // }
    //
    // Event fields are usually defined in:
    //
    // idl.types
    //
    // with:
    //
    // {
    //     name: "EventName",
    //     type: {
    //         kind: "struct",
    //         fields: [...]
    //     }
    // }
    // --------------------------------------------------------

    const eventType = (idl.types ?? []).find(
        (type: any) =>
            type.name === event.name
    );


    // --------------------------------------------------------
    // EVENT TYPE NOT FOUND
    // --------------------------------------------------------

    if (!eventType) {

        console.warn(
            `No type definition found for event: ${event.name}`
        );

        continue;
    }


    // --------------------------------------------------------
    // GET FIELDS
    // --------------------------------------------------------

    const fields =
        eventType.type?.fields ?? [];


    // --------------------------------------------------------
    // CREATE SCHEMA
    // --------------------------------------------------------

    let schema =
        `import { z } from "zod";\n\n`;

    schema +=
        `export const ${event.name}Schema = z.object({\n`;


    for (const field of fields) {

        schema +=
            `    ${field.name}: ${mapType(field.type)},\n`;
    }


    schema +=
        "});";


    // --------------------------------------------------------
    // WRITE FILE
    // --------------------------------------------------------

    fs.writeFileSync(
        path.join(
            outputDir,
            `${event.name}.schema.ts`
        ),
        schema
    );
}


// ============================================================
// EVENT SCHEMAS OBJECT
// ============================================================

let eventImports = "";
let eventObject = "";

for (const event of idl.events ?? []) {

    // Check whether the event type exists
    const eventType = (idl.types ?? []).find(
        (type: any) =>
            type.name === event.name
    );

    if (!eventType) {
        continue;
    }


    eventImports +=
        `import { ${event.name}Schema } from "./${event.name}.schema";\n`;

    eventObject +=
        `    ${event.name}: ${event.name}Schema,\n`;
}


const eventSchemas =
`${eventImports}

export const EventSchemas = {
${eventObject}};
`;


fs.writeFileSync(
    path.join(
        outputDir,
        "eventSchemas.ts"
    ),
    eventSchemas
);


// ============================================================
// EVENT REGISTRY
// ============================================================

let eventRegistry =
    `import { EventSchemas } from "./eventSchemas";\n\n`;

eventRegistry +=
    `export const EventRegistry = new Map([\n`;


for (const event of idl.events ?? []) {

    const eventType = (idl.types ?? []).find(
        (type: any) =>
            type.name === event.name
    );

    // Don't add events whose type definition
    // does not exist
    if (!eventType) {
        continue;
    }


    // --------------------------------------------------------
    // DISCRIMINATOR
    // --------------------------------------------------------

    const discriminator =
        Buffer
            .from(event.discriminator)
            .toString("hex");


    // --------------------------------------------------------
    // REGISTRY ENTRY
    // --------------------------------------------------------

    eventRegistry += `
    [
        "${discriminator}",
        {
            name: "${event.name}",
            schema: EventSchemas["${event.name}"],
        },
    ],
`;
}


eventRegistry +=
    "]);";


fs.writeFileSync(
    path.join(
        outputDir,
        "eventRegistry.ts"
    ),
    eventRegistry
);


// ============================================================
// DONE
// ============================================================

console.log(
    `IDL schemas generated successfully in: ${outputDir}`
);