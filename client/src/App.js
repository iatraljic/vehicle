import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/find')
      .then((res) => res.json())
      .then((data) => setData(data.data))
  }, [])

  return (
    <div>
      <h4>Vehicle management</h4>
      {data.map((item, index) => (
        <span key={index}>
          {`${item.make} - ${item.model} - ${item.year}`}
          <br />
        </span>
      ))}
    </div>
  )
}

export default App
