const express = require('express')
const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4'); // express route request will be handle by apollo express
const bodyParser = require('body-parser')
const cors = require('cors')
const { default: axios } = require('axios')

async function startServer() {
    const app = express();
    const server = new ApolloServer({
        // typeDefs is to define type/schema of your data
        // 1. type Todo -  is your data schema
        // 2. type Query - It will define function name which will be called from api payload.
        typeDefs: `
            type Todo {
                id: ID!
                title: String!
                completed: Boolean
            }

            type Query {
                getTodos: [Todo]
                getAllUsers: [User]
            }
        `,
        resolvers: {
            Query: {
                getTodos: async () => (await axios.get("https://jsonplaceholder.typicode.com/todos")).data
            }
        }
    });

    app.use(bodyParser.json())
    app.use(cors())

    await server.start() // start graphql server

    // It means if any request coming to /graphql then it will be handle by graphql apollo expressMiddleware
    app.use("/graphql", expressMiddleware(server))

    app.listen(8000, () => console.log('Server started at port 8000'))
}

startServer()