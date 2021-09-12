import { useContext } from 'react'

import { MainContext } from '../context'
import SearchBar from '../components/SearchBar'

function Home() {
  const { data, selected, changeSelected } = useContext(MainContext)

  return (
    <div className='container-fluid'>
      <SearchBar
        data={data}
        selected={selected}
        changeSelected={changeSelected}
      />
      <div className='row'>
        <div className='col'>
          <div className='table-responsive'>
            <table className='table'>
              <thead className='table-light'>
                <tr>
                  <th scope='col'>Make</th>
                  <th scope='col'>Model</th>
                  <th scope='col'>Year</th>
                </tr>
              </thead>
              <tbody>
                {data.filtered.map((item) => (
                  <tr key={item._id.$oid}>
                    <td>{`${item.make}`}</td>
                    <td>{`${item.model}`}</td>
                    <td>{`${item.year}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
