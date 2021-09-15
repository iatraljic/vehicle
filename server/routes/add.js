const data = require('../data')

const response = {
  module: 'add',
  status: 200,
  data: {
    make: [],
    model: [],
    year: [],
    filtered: [],
  },
  message: null,
}

function add(query, callback) {
  const message = data.addVechile(query)

  if (!message) {
    response.status = 200
    response.data = data.getFiltered(query)
  } else {
    response.status = 500
    response.message = message
    response.data = {
      make: [],
      model: [],
      year: [],
      filtered: [],
    }
  }

  callback(response)
}

module.exports = add
