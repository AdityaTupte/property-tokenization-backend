
// import {kafka} from "./kakfaClient";


// async function cons() {
//     const consumer  = kafka.consumer({groupId:"user-1"})   
//     const consumer2 = kafka.consumer({groupId:"user-2"})  
//     await consumer.connect()
//     await consumer2.connect()


// await consumer.subscribe({ topics: ['create_property_system'], })
// await consumer2.subscribe({ topics: ['create_property_system'],  })
// await consumer.run({
//     eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
//         console.log({
//             key: message.key?.toString(),
//             value: message.value?.toString(),
//             headers: message.headers,
//         })
//     },
// })

// await consumer2.run({
//     eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
//         console.log("aalllu kachha aalu")
//     },
// })

// //  consumer.disconnect()

// }

// cons()


