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

  // ***** load data
  useEffect(() => {
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
      {props.children}
    </MainContext.Provider>
  )
}

export default ContextlProvider
