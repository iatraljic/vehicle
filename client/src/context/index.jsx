import { createContext, useState, useEffect } from 'react'

export const MainContext = createContext()

const initialState = {
  id: [],
  make: [],
  model: [],
  year: [],
  filtered: [],
}

function ContextlProvider(props) {
  const [selected, setSelected] = useState(initialState)
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(false)

  // ***** load data
  useEffect(() => {
    setLoading(true)
    fetch('/api/find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selected),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data)
        setLoading(false)
        return setData(data.data)
      })
  }, [selected])

  // ***** selection change
  const changeSelected = (type, selected) => {
    setSelected((prev) => ({
      ...prev,
      [type]: selected,
    }))
  }

  // ***** add vehicle
  const addVehicle = (formData) => {
    console.log('addVehicle', formData)
    setLoading(true)
    fetch('/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        if (data.status === 500) {
          alert(`Error!\n\n${data.message}`)
          setSelected(data.data)
        }
        return setData(data.data)
      })
  }

  // ***** remove vehicle
  const removeVehicle = (id) => {
    if (window.confirm('Do you really want to delete vehicle?')) {
      setLoading(true)
      fetch('/api/remove', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...selected, id: [id] }),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false)
          return setData(data.data)
        })
    }
  }

  return (
    <MainContext.Provider
      value={{
        data,
        selected,
        changeSelected,
        addVehicle,
        removeVehicle,
      }}
    >
      {loading && (
        <div className='loading'>
          <div className='spinner'>
            <div className='spinner-border text-primary' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        </div>
      )}

      {props.children}
    </MainContext.Provider>
  )
}

export default ContextlProvider
