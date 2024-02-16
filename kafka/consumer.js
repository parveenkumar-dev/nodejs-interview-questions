const { Kafka } = require('kafkajs')

const run = async () => {
    try {

        const kafka = new Kafka({
            "clientId": "myapp", // can be any name
            "brokers": ["127.0.0.1:9092"]
        })

        const consumer = kafka.consumer({
            "groupId": "testssr"
        });
        console.log("consumer connecting...");
        await consumer.connect();
        console.log("consumer connected...");

        await consumer.subscribe({
            "topic": "Users",
            "fromBeginning": false
        })

        await consumer.run({
            "eachMessage": async (result) => {
                console.log(`RVD msg ${result.message.value} on partition ${result.partition}`);
            }
        })
        
        console.log(`consumed successfully ${JSON.stringify(result)}`)
        
        // await consumer.disconnect();

    } catch (e) {
        console.error(`something wrong happend ${e}`)
    }
}

run();