import React from 'react'

function About() {
    return (
        <>
            <div className="section" id='about'>
                <div className="content">
                    <div className="w-layout-grid grid-focus">
                        <div className="app-focus">
                            <div className="app-focus---sticky">
                                <div className="app-focus---wrapper">
                                    <div className="app-focus---content">
                                        <div className="app-focus---shadow"></div>
                                        <div className="app-focus---image">
                                            <img srcSet="/src/assets/about.jpeg" alt="" className="image-app-focus" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus">
                            <div className="block-heading">
                                <div className="subtitle">
                                    <svg className="icon-subtitle" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="currentColor" fill-rule="evenodd" d="M2.5 20v-.685c0-.685.498-1.483 1.114-1.784l5.66-2.762c.821-.4 1.012-1.288.42-1.99l-.362-.429C8.596 11.478 8 9.85 8 8.71V7a4 4 0 0 1 8 0v1.71c0 1.14-.6 2.773-1.332 3.642l-.361.428c-.59.699-.406 1.588.419 1.99l5.66 2.762c.615.3 1.114 1.093 1.114 1.783V20a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1"/>
                                    </svg>
                                    <div className="text-subtitle">About</div>
                                </div>
                                <h2 className="heading">Praveen <span className="text-transparent">Raj</span></h2>
                            </div>
                            <p className="paragraph">Transform your memories with ease! Our intuitive photo editor provides a seamless experience for users of all skill levels. Whether you’re a professional photographer or someone looking to enhance personal photos, we have the tools you need to bring your vision to life.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About