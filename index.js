const express = require('express')
const path = require('path')
const http = require('http')
const chalk = require('chalk')

const data = require('./server/data')
const find = require('./server/routes/find')
const add = require('./server/routes/add')
const remove = require('./server/routes/remove')

const developPort = '8080'
const app = express()

// Parsers middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ***** express.static built-in middleware
// Postavlja static content aplikacije u “public” directory
if (process.env.PORT) {
  app.use(express.static(path.join(__dirname, 'client/build')))
}

// **************************************************************************
// **************************************************************************
// ***** api routes
// **************************************************************************
// **************************************************************************

// --------------------------------------------------------------------------
// ----- /api/find
// -----
// --------------------------------------------------------------------------
app.post('/api/find', (req, res) => {
  find(req.body, (response) => {
    res.json(response)
  })
})

// --------------------------------------------------------------------------
// ----- /api/add
// -----
// --------------------------------------------------------------------------
app.post('/api/add', (req, res) => {
  add(req.body, (response) => {
    res.json(response)
  })
})

// --------------------------------------------------------------------------
// ----- /api/remove
// -----
// --------------------------------------------------------------------------
app.delete('/api/remove', (req, res) => {
  remove(req.body, (response) => {
    res.json(response)
  })
})

// **************************************************************************
// **************************************************************************
// ***** Sve ostale requestove šalji našoj react aplikaciji
// **************************************************************************
// **************************************************************************
if (process.env.PORT) {
  app.all('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
  })
}

// **************************************************************************
// **************************************************************************
// ***** http listener
// **************************************************************************
// **************************************************************************
const port = process.env.PORT || developPort

app.set('port', port)
const server = http.createServer(app)
server.listen(port, () =>
  console.log(chalk.bgGreen(` Running on localhost: http://localhost:${port} `))
)
