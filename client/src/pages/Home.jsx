import { useContext } from 'react'

import { MainContext } from '../context'
import SearchBar from '../components/SearchBar'

function Home() {
  const { data, selected, changeSelected, removeVehicle } =
    useContext(MainContext)

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
            <table className='table table-striped table-hover'>
              <thead className='table-light'>
                <tr>
                  <th scope='col'>Make</th>
                  <th scope='col'>Model</th>
                  <th scope='col'>Year</th>
                  <th scope='col'>Tools</th>
                </tr>
              </thead>
              <tbody>
                {data.filtered.map((item) => (
                  <tr key={`${item._id.$oid}`}>
                    <td>{`${item.make}`}</td>
                    <td>{`${item.model}`}</td>
                    <td>{`${item.year}`}</td>
                    <td>
                      <button
                        type='button'
                        className='btn btn-danger'
                        title='Delete'
                        style={{ width: '3rem', marginRight: '0.5rem' }}
                        onClick={() => removeVehicle(`${item._id.$oid}`)}
                      >
                        ♻
                      </button>

                      {/* TODO Edit */}
                      <button
                        type='button'
                        className='btn btn-primary'
                        title='Edit'
                        style={{ width: '3rem' }}
                        disabled
                      >
                        ✎
                      </button>
                    </td>
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
