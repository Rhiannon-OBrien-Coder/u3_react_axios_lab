import axios from 'axios'
import StarShips from './StarshipList'
import StarshipPage from './StarshipPage'
import Films from './Films'
import FilmPage from './FilmPage'
import Characters from './Characters'
import Planets from './Planets'
import PlanetPage from './PlanetPage'
import Home from './Home'
import Header from './Header'
import { Routes, Route } from 'react-router-dom'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'

const Main = () => {
    const [ships, setShips] = useState([])
    const [films, setFilms] = useState([])
    const [planets, setPlanets] = useState([])
    const [characters, setCharacters] = useState([])
  
    useEffect(() => {
      const getShips = async () => {
        const response = await axios.get(`${BASE_URL}/api/starships`)
        setShips(response.data.results)
      }
    
      getShips()
    }, [])
  
    useEffect(() => {
      const getFilms = async () => {
        const response = await axios.get(`${BASE_URL}/api/films`)
        setFilms(response.data.results)
      }
    
      getFilms()
    }, [])
  
    useEffect(() => {
      const getPlanets = async () => {
        const response = await axios.get(`${BASE_URL}/api/planets`)
        setPlanets(response.data.results)
      }
    
      getPlanets()
    }, [])
  
    useEffect(() => {
      const getCharacters = async () => {
        const response = await axios.get(`${BASE_URL}/api/people`)
        setCharacters(response.data.results)
      }
    
      getCharacters()
    }, [])
  
return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<StarShips ships={ships} />} />
        <Route path="/starships/:starshipId" element={<StarshipPage />} />
        <Route path="/films" element={<Films films={films} />} />
        <Route path="/films/:filmId" element={<FilmPage />} />
        <Route path="/planets" element={<Planets planets={planets} />} />
        <Route path="/planets/:planetId" element={<PlanetPage />} />
        <Route path="/characters" element={<Characters characters={characters} />} />
        <Route path="*" element={<h2>404 Error: Whoops, nothing here!</h2>} />
      </Routes> 
  </>
  )
}

export default Main