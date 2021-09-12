const data = require('../data')

const response = {
  module: 'find',
  status: 200,
  data: {
    make: [],
    model: [],
    year: [],
    filtered: [],
  },
  message: null,
}

function find(query, callback) {
  response.data = data.getFiltered(query)

  callback(response)
}

module.exports = find
