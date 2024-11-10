import axios from 'axios'
import StarShips from './StarshipList'
import Films from './Films'
import Characters from './Characters'
import Planets from './Planets'
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
      <Header />
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

export default Main