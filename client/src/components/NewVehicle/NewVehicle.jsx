import { useState } from 'react'
import Modal from 'react-overlays/Modal'

// ***** arrays zbog konzistentnosti, jedan type ako se prebaci na typescript
const initialState = {
  make: [''],
  model: [''],
  year: [''],
}

function NewVehicle({ show, hide, addVehicle }) {
  const [formData, setFormData] = useState(initialState)

  const handleInputChange = (type, value) => {
    setFormData((prev) => ({
      ...prev,
      [type]: [value],
    }))
  }

  return (
    <Modal
      show={show}
      style={{
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        width: '400px',
        height: '400px',
        minHeight: '400px',
        margin: 'auto',
        zIndex: '1040',
        border: '1px solid #e5e5e5',
        borderRadius: '5px',
        backgroundColor: 'white',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
        padding: '20px',
      }}
      renderBackdrop={(props) => (
        <div
          {...props}
          style={{
            position: 'fixed',
            zIndex: '1030',
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            backgroundColor: '#000',
            opacity: '0.5',
          }}
        />
      )}
    >
      <div>
        <h4>Add Vehicle</h4>
        <label htmlFor='inputMake' className='form-label'>
          Make*
        </label>
        <input
          className='form-control'
          type='text'
          id='inputMake'
          placeholder='Make'
          aria-label='make'
          value={formData.make[0]}
          onChange={(e) => handleInputChange('make', e.target.value)}
        ></input>
        <label htmlFor='inputModel' className='form-label'>
          Model*
        </label>
        <input
          className='form-control'
          type='text'
          id='inputModel'
          placeholder='Model'
          aria-label='model'
          value={formData.model[0]}
          onChange={(e) => handleInputChange('model', e.target.value)}
        ></input>
        <label htmlFor='inputYear' className='form-label'>
          Year*
        </label>
        <input
          className='form-control'
          type='text'
          id='inputYear'
          placeholder='Year'
          aria-label='year'
          value={formData.year[0]}
          onChange={(e) => handleInputChange('year', e.target.value)}
        ></input>
        <button
          type='button'
          className='btn btn-success'
          title='Add'
          style={{ width: '50%', marginTop: '1rem' }}
          onClick={() => {
            hide()
            addVehicle(formData)
          }}
        >
          ➕ Add
        </button>
        <button
          type='button'
          className='btn btn-danger'
          title='Cancel'
          style={{ width: '50%', marginTop: '1rem' }}
          onClick={hide}
        >
          ✖ Cancel
        </button>
      </div>
    </Modal>
  )
}

export default NewVehicle
