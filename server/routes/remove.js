const data = require('../data')

const response = {
  module: 'delete',
  status: 200,
  data: {
    make: [],
    model: [],
    year: [],
    filtered: [],
  },
  message: null,
}

function remove(query, callback) {
  data.removeVechile(query)
  response.data = data.getFiltered(query)

  callback(response)
}

module.exports = remove
