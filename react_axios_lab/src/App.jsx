import axios from 'axios'
import StarShips from './components/StarshipList'
import NavBar from './components/Nav'
import { BASE_URL } from './globals'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [ships, setShips] = useState([])

  useEffect(() => {
    const getShips = async () => {
      const response = await axios.get(`${BASE_URL}/starships`)
      setShips(response.data.results)
      console.log(response.data.results)
    }
  
    getShips()
  }, [])

  return (
    <>
    <h1>Welcome to our Page!</h1>
    <NavBar />
    <StarShips ships={ships} />
    <Routes>
      <Route path="/" element={<h2>Welcome to our Page</h2>} />
      <Route path="/starships" element={<StarShips ships={ships} />} />
      {/* <Route
        path="/pokemon/:pokemonId"
        element={<PokemonDetails pokemon={pokemon} />}
      /> */}
      <Route path="*" element={<h2>404 Error: Whoops, nothing here!</h2>} />
    </Routes> 
  </>
  )
}

export default App
