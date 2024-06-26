import React from 'react'
import Home from './sections/home'
import About from './sections/about'
import Work from './sections/work'

function App() {

    return (
        <>
            <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
                <div className="nav-block">
                    <a href="/" aria-current="page" className="brand w-nav-brand w--current">
                        <img srcSet="/logo.png" loading="eager" alt="Logo" className="logo" />
                    </a>
                    <div className="nav">
                        <nav className="nav-menu w-nav-menu">
                            <a href="/" aria-current="page" className="nav-link w-nav-link w-current">Home</a>
                            <a href="#about" className="nav-link w-nav-link">About</a>
                            <a href="/works" className="nav-link w-nav-link">Work's</a>
                            <a href="#service" className="nav-link w-nav-link">Service</a>
                            <a href="#review" className="nav-link w-nav-link">Review</a>
                            <a href="/support" className="nav-link w-nav-link">Contact</a>
                        </nav>
                        <div className="menu-button w-nav-button">
                            <div className="icon-menu w-icon-nav-menu"></div>
                        </div>
                    </div>
                </div>
            </div>

            <Home />

            <About />
            
            <Work />
        </>
  )
}

export default App
