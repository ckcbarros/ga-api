const express = require('express')
const { token } = require("./rest")
const app = express()

app.get('/', token)

module.exports = app;