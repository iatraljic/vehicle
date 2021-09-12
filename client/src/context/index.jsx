import { createContext, useState, useEffect } from 'react'

export const MainContext = createContext()

const initialState = {
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

  return (
    <MainContext.Provider
      value={{
        data,
        selected,
        changeSelected,
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
