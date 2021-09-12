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
  response.data.make = data.getMake(query)
  response.data.model = data.getModel(query)
  response.data.year = data.getYear(query)
  response.data.filtered = data.getFiltered(query)

  callback(response)
}

module.exports = find
