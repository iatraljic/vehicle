const fs = require('fs')
const path = require('path')

let all = []
let make = []
let model = []
let year = []

;(function () {
  const makeSet = new Set()
  const modelSet = new Set()
  const yearSet = new Set()

  console.log('IIFE')
  if (!all.length) {
    const data = fs.readFileSync(path.join(__dirname, 'VehicleInfo.json'))
    all = JSON.parse(data)

    all.forEach((item) => {
      makeSet.add(`${item.make}`)
      modelSet.add(`${item.model}`)
      yearSet.add(`${item.year}`)
    })

    make = [...makeSet].sort()
    model = [...modelSet].sort()
    year = [...yearSet].sort()
  }
})()

function getAll() {
  return all
}

function getMake() {
  return make
}

function getModel() {
  return model
}

function getYear() {
  return year
}

module.exports = {
  getAll,
  getMake,
  getModel,
  getYear,
}
