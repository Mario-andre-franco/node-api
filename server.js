const mongoose = require('mongoose')
const express = require ('express')
const requireDir = require('require-dir')
const cors = require ('cors')

const app = express()
app.use(express.json())
app.use(cors())

//initializing db
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true})

requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(3001)