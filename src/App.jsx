import './App.css'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar'
import Header from './components/Header';
import Qoute from './components/qoute';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Tours from './components/Tours';
import Slide from './components/Slider';
import StandardImageList from './components/ImageList'
function App() {
  return (
    <>
    <CssBaseline/>
      <Navbar/>
      <Header/>
      <Qoute/>
      <Slide/>
      <Explore/>
      <Tours/>
      <StandardImageList/>
      <Footer/>
    </>
  )
}

export default App
