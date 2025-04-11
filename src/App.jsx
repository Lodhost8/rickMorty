import { useEffect, useState } from 'react'
import { useFetchApi } from "./hooks/useFetchApi"
import Hero from './components/Hero'
import Search from './components/search'  
import LocationInfo from './components/LocationInfo'
import ResidentsList from './components/ResidentsList'
import { getRandomNumber } from './utils'

const baseUrl = 'https://rickandmortyapi.com/api/location/'

function App() {
  const {data: location, request, loading } = useFetchApi()
  const [locationId, setLocationId] = useState(getRandomNumber())

  useEffect(() => {
    request(`${baseUrl}/${locationId}`)
  }, [locationId])

  return (
    <div className="container">
      {/* Hero */}
      <Hero />
      {/* Search */}
    <Search setLocationId={setLocationId}/>

      {/* LocationInfo */}
     {loading ? <p className='loading-text'>Cargando...</p> : (
      location && <LocationInfo location={location}/>
      )}

      {/* Residentslist */}
      {location && <ResidentsList residents={location?.residents}/>}

    </div>
  )
}

export default App
