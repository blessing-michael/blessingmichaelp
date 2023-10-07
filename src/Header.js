import React from 'react'


function Header() {
  return (
    <div className='header-section'>
     
        <header className='header'>
            <h1>Hi,</h1>
            <h1>I'm Blessing</h1>
            <h1> Front-End Developer</h1>
            <button className='cv-btn'>Cv/Resume</button>
            <a
            className="footer-a nav-a"
            href="https://docs.google.com/document/d/1Z2JSFpLZi3EJeBFBurkhdVcw5LoxzSnQhV2L3Q6lfJk/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cv/Resume
          </a>
            
        </header>
        <section className='portfolio'>
            <div className="portfolio-info">
            <h2 className='portfolio-h1'>My Portfolio</h2>
            <p className='portfolioIngo-p'>Here's the technologies I've used and projects I've worked on</p>

            </div>
            <div className="technical-skills">
                <div className="one">HTML</div>
                <div className="one">JavaScript</div>
                <div className="one">CSS</div>
                <div className="one">React js</div>
                <div className="one">Git</div>
            </div>
           
        </section>
    </div>
  )
}

export default Header