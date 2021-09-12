const data = require('../data')

const response = {
  module: 'find',
  status: 200,
  data: {
    make: [],
    model: [],
    year: [],
  },
  message: null,
}

function find(query, callback) {
  console.log(query)
  response.data.make = data.getMake()
  response.data.model = data.getModel()
  response.data.year = data.getYear()

  callback(response)
}

module.exports = find
