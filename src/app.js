//
//
//
const express = require('express')

const CF = require('./config/config')

const app = express()

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

// API
app.use(CF.server.apiPath, require('./api/index'))


module.exports = app
