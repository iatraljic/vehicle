import { useState, useEffect } from 'react'

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/find')
      .then((res) => res.json())
      .then((data) => setData(data.data))
  }, [])

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          {data.map((item, index) => (
            <span key={index}>
              {`${item}`}
              <br />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
