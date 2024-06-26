import React from 'react'

function Home() {
    return (
        <>
            <div className="gradient-hero">
                <div className="noise"></div>
            </div>
            <div className="section-hero">
                <div className="content">
                    <div className="w-layout-grid grid-hero">
                        <div className="block-hero">
                            <h1 className="heading-hero">Hello, I am Praveen<br />Photo Editor</h1>
                            <p className="paragraph-hero">Transform your memories with ease! Our intuitive photo editing offers from professional photographers to casual users.</p>
                            <div className="block-button">
                                <a href="#about" className="button w-inline-block">
                                    <div className="text-button white">About Us</div>
                                </a>
                            </div>
                        </div>
                        <div className="app-hero">
                            <div className="app-hero-wrapper">
                                <div className="app-hero-content">
                                    <img srcSet="/src/assets/home.jpeg" alt="" className="image-app---hero" />
                                    <div className="app-hero---shadow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home