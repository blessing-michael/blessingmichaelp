import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Header'
import Projects from './Projects.js'
import About from './About'
import Tech from './Tech'

import Contact from './Contact'
import Footer from './Footer'
import Nav from './Nav'
import Articles from './Articles'
import MagicCursor from "./components/MagicCursor";
import GlowBlob from "./components/GlowBlob";

function App() {
  return (
    <div>

      <MagicCursor />
      <GlowBlob />
      <Nav />

      <Header />
      <Tech />
      <Projects />
      {/* <Articles/> */}
      <MagicCursor />
      <GlowBlob />

      <About />
      <Contact />
      <Footer />

      {/* <Router> */}

      {/* <Routes> */}
      {/* <Route path="/" element={
        }/>

        <Route path="/project" element={  <Projects/>}/>
        <Route path="/about" element={
        <About/>}/>
        <Route path="/contact" element={
      <Contact/>}/>
        <Route path="/footer" element={
       <Footer/>}/> */}

      {/* </Routes> */}




      {/* </Router> */}

    </div>
  )
}

export default App