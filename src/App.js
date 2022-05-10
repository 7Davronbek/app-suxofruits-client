import React from 'react'
import AboutUs from './components/AboutUs'
import Galary from './components/Galary'
import Header from './components/Header'
import WhyWe from './components/WhyWe'

const App = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Galary />
      <WhyWe />
      <div className="vh-100"></div>
    </>
  )
}

export default App