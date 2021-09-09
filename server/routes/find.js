const response = {
  module: 'find',
  status: 200,
  data: {},
  message: null,
}

function find(query, callback) {
  callback(response)
}

module.exports = find
