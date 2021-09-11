const data = require('../data')

const response = {
  module: 'find',
  status: 200,
  data: [],
  message: null,
}

function find(query, callback) {
  response.data = data.getYear()
  callback(response)
}

module.exports = find
