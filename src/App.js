import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Header'
import Projects from './Projects.js'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Nav from './Nav'

function App() {
  return (
    <div>


<Nav/>
<Header/>
<Projects/>
      
      <About/>
     <Contact/>
     <Footer/>
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