import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Cards from './components/Cards';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Cards/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App
