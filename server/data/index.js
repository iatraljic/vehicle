const fs = require('fs/promises')
const path = require('path')

let json = []

async function read() {
  if (!json.length) {
    const data = await fs.readFile(path.join(__dirname, 'VehicleInfo.json'))
    json = JSON.parse(data)
  }

  return json
}

module.exports = {
  read,
}
