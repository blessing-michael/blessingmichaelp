import React from 'react'


function Header() {
  return (
    <div>
     
        <header className='header'>
            <h1>Hi,</h1>
            <h1>I'm Blessing</h1>
            <h1> Front-End Developer</h1>
            <button className='cv-btn'>Cv/Resume</button>
        </header>
        <section className='portfolio'>
            <div className="portfolio-info">
            <h2 className='portfolio-h1'>My Portfolio</h2>
            <p className='portfolioIngo-p'>Here's the technologies I've used and projects I've worked on</p>

            </div>
            <div className="technical-skills">
                <div className="one">Html</div>
                <div className="one">Javascript</div>
                <div className="one">CSS</div>
                <div className="one">React js</div>
                <div className="one">Git</div>
            </div>
           
        </section>
    </div>
  )
}

export default Header