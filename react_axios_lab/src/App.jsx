import axios from 'axios'
import StarShips from './components/StarshipList'
import Films from './components/Films'
import Characters from './components/Characters'
import Planets from './components/Planets'
import NavBar from './components/Nav'
import Home from './components/Home'
import { BASE_URL } from './globals'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [ships, setShips] = useState([])
  const [films, setFilms] = useState([])
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getShips = async () => {
      const response = await axios.get(`${BASE_URL}/starships`)
      setShips(response.data.results)
      console.log(response.data.results)
    }
  
    getShips()
  }, [])

  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(`${BASE_URL}/films`)
      setFilms(response.data.results)
      console.log(response.data.results)
    }
  
    getFilms()
  }, [])

  useEffect(() => {
    const getPlanets = async () => {
      const response = await axios.get(`${BASE_URL}/planets`)
      setPlanets(response.data.results)
      console.log(response.data.results)
    }
  
    getPlanets()
  }, [])

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get(`${BASE_URL}/people`)
      setCharacters(response.data.results)
      console.log(response.data.results)
    }
  
    getCharacters()
  }, [])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<StarShips ships={ships} />} />
        <Route path="/films" element={<Films films={films} />} />
        <Route path="/planets" element={<Planets planets={planets} />} />
        <Route path="/characters" element={<Characters characters={characters} />} />
        <Route path="*" element={<h2>404 Error: Whoops, nothing here!</h2>} />
      </Routes> 
  </>
  )
}

export default App
