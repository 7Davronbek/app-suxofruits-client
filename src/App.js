import React from 'react'
import AboutUs from './components/AboutUs'
import Galary from './components/Galary'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Galary />
      <div className="vh-100"></div>
    </>
  )
}

export default App