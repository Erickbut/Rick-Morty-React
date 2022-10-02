import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import ErrorScreen from './components/ErrorScreen'
import FilterList from './components/FilterList'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'



function App() {

  //para guardar una location
  const [location, setLocation] = useState()
  //para guardar informacion del input y hacer la peticion cuando hace submit
  const [searchInput, setSearchInput] = useState()
  //para guardar las sugerencias de la api
  const [suggestedList, setSuggestedList] = useState()
  //para indicar si hay error o no 
  const [hasError, setHasError] = useState(false)


  useEffect(() => {
    let id = getRandomNumber()
    if (searchInput) {
      id = searchInput
    }

    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)
      .then(res => {
        setHasError(false)
        setLocation(res.data)
      })
      .catch(err => setHasError(true))
  }, [searchInput])

  const handleSubmit = event => {
    event.preventDefault()
    setSearchInput(event.target.idLocation.value)
  }
  const handleChange = event => {

    if (event.target.value === '') {
      setSuggestedList()
    } else {

    }

    const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`

    axios.get(URL)
      .then(res => setSuggestedList(res.data.results))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <div class="main-section">
      <div class="overlay">
      </div></div>
      <form onSubmit={handleSubmit}>
        <input 
          id='idLocation'
          placeholder='Enter another number from 1 to 126'
          type="text"
          onChange={handleChange}
        />
        <button className='btn_search'>Search</button>
        <FilterList
          suggestedList={suggestedList}
          setSearchInput={setSearchInput}
        />
      </form>
      {
        hasError ?
          <ErrorScreen />
          :
          <>
            <LocationInfo location={location} />
            <div className='card_container'>
              {
                location?.residents.map(url => (
                  <CardResident
                    key={url}
                    url={url}
                  />
                ))
              }
            </div>
          </>
      }
    </div>
  )
}

export default App
