import React from 'react'
import './Welcome.css'

const Welcome = () => {
    return (
        <section className='welcome'>
            <div className="welcome__container">
                <div className="welcome__left">
                    <div className="welcome__left__container">
                        <div className="left__upper">
                            <h1>Welcome to Cairo Brews</h1>
                            <p>We're a differend kind of liqour store. We offer unique wine, beer and spirits selections you won't find anywhere else in entire of Egypt. But to us, unique doesn't have to mean expensive. We scout the world for the extraordinary and deliver variety and value to our customers at every price point</p>
                        </div>
                        <div className="welcome__button">
                            <button>
                                <h2>Know More</h2>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="welcome__right">
                    <div className="welcome__right__container">
                        <div className="yellowish__circle"></div>
                        <div className="right__text">
                            <h1>We Scour the world for the extraordinary and deliver variety and value every price point.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome