const express = require('express')
const morgan = require('morgan')
const apollo = require('./apollo')

const app = express()
const port = 5001

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

apollo.applyMiddleware({ app, path: '/graphql' })

app.listen(port, () => console.log('Online:', port))
