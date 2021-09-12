const fs = require('fs')
const path = require('path')

let all = []

;(function () {
  console.log('IIFE')
  if (!all.length) {
    const data = fs.readFileSync(path.join(__dirname, 'VehicleInfo.json'))
    all = JSON.parse(data).sort((a, b) => {
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
})()

// --------------------------------------------------------------------------
// ----- getAll
// -----
// --------------------------------------------------------------------------
function getAll() {
  return all
}

// --------------------------------------------------------------------------
// ----- getMake
// -----
// --------------------------------------------------------------------------
function getMake(query) {
  let make = []

  if (query.make[0]) {
    make = [...query.make]
  } else {
    const makeSet = new Set()

    all.forEach((item) => {
      if (query.model[0] && query.year[0]) {
        if (
          query.model[0] === `${item.model}` &&
          query.year[0] === `${item.year}`
        ) {
          makeSet.add(`${item.make}`)
        }
      } else if (query.model[0]) {
        if (query.model[0] === `${item.model}`) {
          makeSet.add(`${item.make}`)
        }
      } else if (query.year[0]) {
        if (query.year[0] === `${item.year}`) {
          makeSet.add(`${item.make}`)
        }
      } else {
        makeSet.add(`${item.make}`)
      }
    })

    make = [...makeSet].sort()
  }

  return make
}

// --------------------------------------------------------------------------
// ----- getModel
// -----
// --------------------------------------------------------------------------
function getModel(query) {
  let model = []

  if (query.model[0]) {
    model = [...query.model]
  } else {
    const modelSet = new Set()

    all.forEach((item) => {
      if (query.make[0] && query.year[0]) {
        if (
          query.make[0] === `${item.make}` &&
          query.year[0] === `${item.year}`
        ) {
          modelSet.add(`${item.model}`)
        }
      } else if (query.make[0]) {
        if (query.make[0] === `${item.make}`) {
          modelSet.add(`${item.model}`)
        }
      } else if (query.year[0]) {
        if (query.year[0] === `${item.year}`) {
          modelSet.add(`${item.model}`)
        }
      } else {
        modelSet.add(`${item.model}`)
      }
    })

    model = [...modelSet].sort()
  }

  return model
}

// --------------------------------------------------------------------------
// ----- getYear
// -----
// --------------------------------------------------------------------------
function getYear(query) {
  let year = []

  if (query.year[0]) {
    year = [...query.year]
  } else {
    const yearSet = new Set()

    all.forEach((item) => {
      if (query.make[0] && query.model[0]) {
        if (
          query.make[0] === `${item.make}` &&
          query.model[0] === `${item.model}`
        ) {
          yearSet.add(`${item.year}`)
        }
      } else if (query.make[0]) {
        if (query.make[0] === `${item.make}`) {
          yearSet.add(`${item.year}`)
        }
      } else if (query.model[0]) {
        if (query.model[0] === `${item.model}`) {
          yearSet.add(`${item.year}`)
        }
      } else {
        yearSet.add(`${item.year}`)
      }
    })

    year = [...yearSet].sort()
  }

  return year
}

// --------------------------------------------------------------------------
// ----- getFiltered
// -----
// --------------------------------------------------------------------------
function getFiltered(query) {
  let filtered = []

  if (query.make[0] || query.model[0] || query.year[0]) {
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

      filtered.push(item)
    })
  }

  return filtered
}

module.exports = {
  getAll,
  getFiltered,
  getMake,
  getModel,
  getYear,
}
