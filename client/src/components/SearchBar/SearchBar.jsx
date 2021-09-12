import { useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'

function SearchBar({ data }) {
  const [selected, setSelected] = useState({ make: [], model: [], year: [] })

  const onChange = (type, selected) => {
    setSelected((prev) => ({
      ...prev,
      [type]: selected,
    }))
  }

  console.log('selected', selected)

  return (
    <div className='row'>
      <div className='col-md-4'>
        <Typeahead
          id='make'
          labelKey='make'
          onChange={(selected) => onChange('make', selected)}
          options={data.make}
          placeholder='Choose a make...'
          selected={selected.make}
        />
      </div>
      <div className='col-md-4'>
        <Typeahead
          id='model'
          labelKey='model'
          onChange={(selected) => onChange('model', selected)}
          options={data.model}
          placeholder='Choose a model...'
          selected={selected.model}
        />
      </div>
      <div className='col-md-4'>
        <Typeahead
          id='year'
          labelKey='year'
          onChange={(selected) => onChange('year', selected)}
          options={data.year}
          placeholder='Choose a year...'
          selected={selected.year}
        />
      </div>
    </div>
  )
}

export default SearchBar
