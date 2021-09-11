const fs = require('fs/promises')
const path = require('path')

let json = []

async function read() {
  console.log('read')
  if (!json.length) {
    console.log('from disk')
    const data = await fs.readFile(path.join(__dirname, 'VehicleInfo.json'))
    json = JSON.parse(data)
  }

  return json
}

module.exports = {
  read,
}
