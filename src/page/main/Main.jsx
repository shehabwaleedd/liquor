import React from 'react'
import './Main.css'
import glass from "../../Assets/stellas.jpeg"
import ArcText from '../../component/arcTextCircle/ArcText'

const Main = () => {
    return (
        <main className='main'>
            <div className="main__container">
                <div className="main__left">
                    <div className="left__container">
                        <p>CAIRO BREWS HOUSE </p>
                        <div className="left__title">
                            <h1>Cairo's</h1>
                            <h1>Wine, Beer &</h1>
                            <h1>Spirits Specialists</h1>
                        </div>
                    </div>
                </div>
                <ArcText />
                <div className="main__right">
                    <img src={glass} alt="" />
                </div>
            </div>
        </main>
    )
}

export default Main