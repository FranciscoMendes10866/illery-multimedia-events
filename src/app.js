// ENV VARS
require('dotenv').config()

const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const routes = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use('/api/v1', routes)

module.exports = app