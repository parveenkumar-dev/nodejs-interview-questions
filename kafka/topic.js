const { Kafka } = require('kafkajs')

const run = async () => {
    try {

        const kafka = new Kafka({
            "clientId": "myapp", // can be any name
            "brokers": ["127.0.0.1:9092"]
        })

        const admin = kafka.admin(); // admin connection needed to create topic
        console.log("connecting...");
        await admin.connect();
        console.log("connected...");

        await admin.createTopics({
            "topics": [{
                "topic": "Users",
                "numPartitions": 2
            }]
        })
        console.log("Topic created")
        await admin.disconnect();

    } catch (e) {
        console.error(`something wrong happend ${e}`)
    }
    finally{
        process.exit(0)
    }
}

run();