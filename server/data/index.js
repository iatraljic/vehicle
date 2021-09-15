const fs = require('fs')
const path = require('path')

let all = []

;(function () {
  console.log('IIFE')
  loadAll()
})()

// --------------------------------------------------------------------------
// ----- sortAll
// -----
// --------------------------------------------------------------------------
function sortAll(data) {
  return data.sort((a, b) => {
    if (a.make > b.make) {
      return 1
    } else if (a.make < b.make) {
      return -1
    } else {
      if (a.model > b.model) {
        return 1
      } else if (a.model < b.model) {
        return -1
      } else {
        if (a.year > b.year) {
          return 1
        } else if (a.year < b.year) {
          return -1
        }
      }
    }
    return 0
  })
}

// --------------------------------------------------------------------------
// ----- loadAll
// -----
// --------------------------------------------------------------------------
function loadAll() {
  if (!all.length) {
    const data = fs.readFileSync(path.join(__dirname, 'VehicleInfo.json'))
    all = sortAll(JSON.parse(data))
  }
}

// --------------------------------------------------------------------------
// ----- saveAll
// -----
// --------------------------------------------------------------------------
function saveAll() {
  if (all.length) {
    fs.writeFileSync(
      path.join(__dirname, 'VehicleInfo.json'),
      JSON.stringify(all, null, 2)
    )
  }
}

// --------------------------------------------------------------------------
// ----- getAll
// -----
// --------------------------------------------------------------------------
function getAll() {
  return all
}

// --------------------------------------------------------------------------
// ----- getFiltered
// -----
// --------------------------------------------------------------------------
function getFiltered(query) {
  const data = {
    make: [],
    model: [],
    year: [],
    filtered: [],
  }
  const makeSet = new Set()
  const modelSet = new Set()
  const yearSet = new Set()

  all.forEach((item) => {
    if (query.make[0] && query.make[0] !== `${item.make}`) {
      return
    }
    if (query.model[0] && query.model[0] !== `${item.model}`) {
      return
    }
    if (query.year[0] && query.year[0] !== `${item.year}`) {
      return
    }

    makeSet.add(`${item.make}`)
    modelSet.add(`${item.model}`)
    yearSet.add(`${item.year}`)

    if (query.make[0] || query.model[0] || query.year[0]) {
      data.filtered.push(item)
    }
  })

  data.make = [...makeSet].sort()
  data.model = [...modelSet].sort()
  data.year = [...yearSet].sort()

  return data
}

// --------------------------------------------------------------------------
// ----- mongoObjectId
// ----- https://gist.github.com/solenoid/1372386
// --------------------------------------------------------------------------
function mongoObjectId() {
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16)
  return (
    timestamp +
    'xxxxxxxxxxxxxxxx'
      .replace(/[x]/g, function () {
        return ((Math.random() * 16) | 0).toString(16)
      })
      .toLowerCase()
  )
}

// --------------------------------------------------------------------------
// ----- addVechile
// -----
// --------------------------------------------------------------------------
function addVechile(query) {
  if (query.make[0] && query.model[0] && query.year[0]) {
    const index = all.findIndex(
      (item) =>
        `${item.make}` === query.make[0] &&
        `${item.model}` === query.model[0] &&
        `${item.year}` === query.year[0]
    )

    if (index === -1) {
      all.push({
        _id: {
          $oid: mongoObjectId(),
        },
        make: query.make[0],
        model: query.model[0],
        year: query.year[0],
      })

      saveAll()
      all = sortAll(all)

      return null
    }

    return `Vehicle ${query.make[0]}, ${query.model[0]}, ${query.year[0]} existing!`
  }

  return 'Al fields are required!'
}

// --------------------------------------------------------------------------
// ----- removeVechile
// -----
// --------------------------------------------------------------------------
function removeVechile(query) {
  if (query.id[0]) {
    const index = all.findIndex((item) => `${item._id.$oid}` === query.id[0])
    all.splice(index, 1)

    saveAll()
  }
}

module.exports = {
  getAll,
  getFiltered,
  addVechile,
  removeVechile,
}
