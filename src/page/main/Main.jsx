import React from 'react'
import './Main.css'
import glass from "../../Assets/creek.jpg"

const Main = () => {
    return (
        <main className='main'>
            <div className="main__container">
                <div className="main__left">
                    <div className="left__container">
                        <p>CAIRO BREWS HOUSE </p>
                        <div className="left__title">
                            <h1>Delta's</h1>
                            <h1>Wine, Beer &</h1>
                            <h1>Spirits Specialists</h1>
                        </div>
                    </div>
                </div>
                <div className="main__right">
                    <img src={glass} alt="" />
                </div>
            </div>
        </main>
    )
}

export default Main