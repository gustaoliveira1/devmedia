import React from 'react'
import './App.css'

import Header from './componentes/header'
import Footer from './componentes/footer'
import HomePage from './componentes/homePage'

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default App