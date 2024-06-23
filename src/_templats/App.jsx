import Home from './_sections/home'

function App() {

    return (
        <>
            <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
                <div className="nav-block">
                    <a href="/" aria-current="page" className="brand w-nav-brand w--current">
                        <img srcSet="/logo.png" loading="eager" alt="Logo" className="logo" />
                    </a>
                    <div className="nav">
                        <nav role="navigation" className="nav-menu w-nav-menu">
                            <a href="/" aria-current="page" className="nav-link w-nav-link w-current">Home<br/></a>
                            <a id="#about" className="nav-link w-nav-link">About<br/></a>
                            <a href="/work" className="nav-link w-nav-link">Work's<br/></a>
                            <a id="#service" className="nav-link w-nav-link">Service<br/></a>
                            <a id="#review" className="nav-link w-nav-link">Review's<br/></a>
                            <a href="/support" className="nav-link w-nav-link">Contact<br/></a>
                        </nav>
                        <div className="menu-button w-nav-button">
                            <div className="icon-menu w-icon-nav-menu"></div>
                        </div>
                    </div>
                </div>
            </div>

            <Home />
        </>
  )
}

export default App
