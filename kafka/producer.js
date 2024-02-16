const { Kafka } = require('kafkajs')

const run = async () => {
    try {

        const kafka = new Kafka({
            "clientId": "myapp", // can be any name
            "brokers": ["127.0.0.1:9092"]
        })

        const producer = kafka.producer();
        console.log("producer connecting...");
        await producer.connect();
        console.log("producer connected...");

        const result = await producer.send({
            "topic": "Users",
            "messages": [
                {
                    "value": "hey there3",
                    "partition": 0
                }
            ]
        })
        console.log(`produced successfully ${JSON.stringify(result)}`)
        
        await producer.disconnect();

    } catch (e) {
        console.error(`something wrong happend ${e}`)
    }
    finally{
        process.exit(0)
    }
}

run();