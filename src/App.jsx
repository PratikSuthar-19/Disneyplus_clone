import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHose from './components/ProductionHose'
import GenreMovieList from './components/GenreMovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Slider/>
   <ProductionHose/>
   <GenreMovieList/>
    </>
  )
}

export default App
