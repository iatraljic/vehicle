import { Typeahead } from 'react-bootstrap-typeahead'

function SearchBar({ data, selected, changeSelected }) {
  console.log('selected', selected)

  return (
    <div className='row'>
      <div className='col-md-4'>
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
      <div className='col-md-4'>
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
      <div className='col-md-4'>
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
    </div>
  )
}

export default SearchBar
