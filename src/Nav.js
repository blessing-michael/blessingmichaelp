import React, { useState } from 'react'
import { HiBars4} from "react-icons/hi2";
import {AiOutlineClose } from "react-icons/ai";
import {Link} from 'react-scroll'
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillTwitterCircle,
  } from "react-icons/ai";
  import { FaDev } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

function Nav() {
    const [showlinks, setShowLinks]= useState(false)
    const showbar=()=>{
        console.log('clicked')
        setShowLinks(true )
    }

    const closenav=()=>{
        setShowLinks(false )
    }
    // const navigate = useNavigate()

    // const ProjectNav=()=>{
    //     navigate("/project")
    // }
  return (
    <nav className='head'>
        <div className="nav">
        <div className="logo">
      <h2 className='nav-h2'> Blessing <span className='nav-span'>Michael</span></h2>
    </div>
    <div className="icons-Na">
    <div className="navbar" onClick={showbar}><HiBars4 className='nav-icon'/></div>
   
    </div>
   

        </div>
   



    <div className={ ` ${showlinks?"nav-show show-container" : 'nav-show'}`}>

        <div className="" onClick={closenav}>
        <AiOutlineClose className='show-closeicon' />
        </div>
        <ul className='link-element'>
          


            <Link to="project" spy={true} smooth={true} offset={-60} duration={500}><li  className='li-element' onClick={closenav}>Projects</li></Link>
            <Link to="about" spy={true} smooth={true} offset={-50} duration={500}><li className='li-element' onClick={closenav}>About</li></Link>
            <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}><li className='li-element' onClick={closenav} >contact</li></Link>
            <button className='li-btn'>Resume</button>
            <div className="">

            <div className="footer-icon navlink-icon">
          <a
            className="footer-a nav-a"
            href="https://github.com/blessing-michael?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <AiFillGithub />
          </a>
          <a
            className="footer-a nav-a"
            href="https://www.linkedin.com/in/blessing-asuquo-4509981a2/https://github.com/blessing-michael?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <AiFillLinkedin />
          </a>
          <a
            className="footer-a nav-a "
            href="https://dev.to/blessingmichael"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaDev />
          </a>
          <a
            className="footer-a nav-a"
            href="https://twitter.com/toonmystory"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <AiFillTwitterCircle />
          </a>
        </div>
            </div>
            
        </ul>
    </div>
  </nav>
  )
}

export default Nav