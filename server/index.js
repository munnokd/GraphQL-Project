const express = require('express')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const PORT = process.env.PORT || 5000
const schema = require('./schema/schema')
const connectDB = require('./config/db.js')

const app = express()

connectDB()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(PORT, console.log(`Server Running on http://localhost:${PORT}`))