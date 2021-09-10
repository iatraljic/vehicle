const data = require('../data')

const response = {
  module: 'find',
  status: 200,
  data: [],
  message: null,
}

async function find(query, callback) {
  console.log('read')
  response.data = await data.read()
  callback(response)
}

module.exports = find
