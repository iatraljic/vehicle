import { useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'

import NewVehicle from '../NewVehicle'

function SearchBar({ data, selected, changeSelected, addVehicle }) {
  const [showNewVehicle, setShowNewVehicle] = useState(false)

  console.log('selected', selected)

  return (
    <>
      <NewVehicle
        show={showNewVehicle}
        hide={() => setShowNewVehicle(false)}
        addVehicle={addVehicle}
      />

      <div className='row'>
        <div className='col-md-3'>
          <label htmlFor='make' className='form-label'>
            Make
          </label>
          <Typeahead
            id='make'
            labelKey='make'
            onChange={(selected) => changeSelected('make', selected)}
            options={data.make}
            placeholder='Choose a make...'
            selected={selected.make}
          />
        </div>
        <div className='col-md-3'>
          <label htmlFor='model' className='form-label'>
            Model
          </label>
          <Typeahead
            id='model'
            labelKey='model'
            onChange={(selected) => changeSelected('model', selected)}
            options={data.model}
            placeholder='Choose a model...'
            selected={selected.model}
          />
        </div>
        <div className='col-md-3'>
          <label htmlFor='year' className='form-label'>
            Year
          </label>
          <Typeahead
            id='year'
            labelKey='year'
            onChange={(selected) => changeSelected('year', selected)}
            options={data.year}
            placeholder='Choose a year...'
            selected={selected.year}
          />
        </div>
        <div className='col-md-3 align-self-end'>
          <button
            type='button'
            className='btn btn-success'
            title='New Vehicle'
            style={{ width: '100%' }}
            onClick={() => setShowNewVehicle(true)}
          >
            ➕ New Vehicle
          </button>
        </div>
      </div>
    </>
  )
}

export default SearchBar
