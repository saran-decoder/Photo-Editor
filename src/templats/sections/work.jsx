import React, { useEffect, useRef } from "react";

function Work() {
    const containerRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const slider = sliderRef.current;

        if (slider && container) {
            slider.addEventListener('input', (e) => {
                container.style.setProperty('--position', `${e.target.value}%`);
            });

            // Clean up the event listener on component unmount
            return () => {
                slider.removeEventListener('input', (e) => {
                    container.style.setProperty('--position', `${e.target.value}%`);
                });
            };
        }
    }, []);

    return (
        <>
            <div className="section">
                <div className="content-wide">
                    <div className="w-layout-grid grid-functions">
                        <div id="w-node-f5c0af81-4013-be1e-5c3f-7e73946682be-379d5480" className="functions-large">
                            <div className="block-functions-large">
                                <h2 className="heading">Execute your plans without <span className="text-transparent">missing a single day</span></h2>
                                <p className="paragraph">Amet amet adipiscing eu semper urna ultricies urna dolor eu. Tellus adipiscing non rutrum rutrum nec iaculis semper tincidunt.</p>
                            </div>
                            {/* <img className="image-functions-large" srcSet="https://assets-global.website-files.com/638ff800599a0427a59d547f/639513864389cb643fda8603_functions_1.png" alt="" /> */}
                            <div className="image-functions-large" ref={containerRef}>
                                <div className="image-container">
                                    <img className="image-before slider-image" srcSet="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="My Work's" />
                                    <img className="image-after slider-image" srcSet="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="black and white" />
                                </div>
                                {/* <!-- step="10" --> */}
                                <input type="range" min="0" max="100" defaultValue="50" aria-label="Percentage of before photo shown" className="slider" ref={sliderRef} />
                                <div className="slider-line" aria-hidden="true"></div>
                                <div className="slider-button" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 256 256">
                                        <rect width="256" height="256" fill="none"></rect>
                                        <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                        <line x1="96" y1="128" x2="16" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                        <polyline points="48 160 16 128 48 96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                                        <line x1="160" y1="128" x2="240" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                        <polyline points="208 96 240 128 208 160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div id="w-node-_31aca3be-6c53-1b18-94f2-0ee9f7584b1b-379d5480" className="functions">
                            <img className="image-functions" srcSet="https://assets-global.website-files.com/638ff800599a0427a59d547f/6395138644a122a7a5e81baf_functions_2.png" alt="" />
                            <h3 className="heading-functions">Connect the <span className="text-transparent">database and services</span></h3>
                            <p className="paragraph">Id auctor viverra aliquet magna lectus tellus et consectetur sed. Leo scelerisque nunc.</p>
                        </div>
                        <div id="w-node-_7a56818a-2d20-f91b-593a-57107d8f6e42-379d5480" className="functions">
                            <img className="image-functions" srcSet="https://assets-global.website-files.com/638ff800599a0427a59d547f/63951386c7969e3ce6b84d72_functions_3.png" alt="" />
                            <h3 className="heading-functions">No more <span className="text-transparent">complicated workflows</span></h3>
                            <p className="paragraph">Vel erat purus sem mus donec lorem aliquam scelerisque. Tincidunt tempus semper.</p>
                        </div>
                    </div>
                </div>
                <div className="gradient"><div className="noise"></div></div>
            </div>
        </>
    );
}

export default Work;