import { useState, useEffect } from 'react'

import SearchBar from '../components/SearchBar'

function Home() {
  const [data, setData] = useState({ make: [], model: [], year: [] })

  useEffect(() => {
    fetch('/api/find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ make: 'make', model: 'model', year: 'year' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        return setData(data.data)
      })
  }, [])

  return (
    <div className='container-fluid'>
      <SearchBar data={data} />
      <div className='row'>
        <div className='col'>
          {/* {data.model.map((item, index) => (
            <span key={index}>
              {`${item}`}
              <br />
            </span>
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default Home
