import React from 'react'
import './Promotions.css'
import stella from "../../../Assets/stella.png"
import henn from "../../../Assets/domaine.png"

const Promotions = () => {
    return (
        <section className='promotions'>
            <div className="promotions__container">
                <div className="promotions__left">
                    <div className="promotions__left-container">
                        <div className="promotions__upper promotion__left__image">
                            <div className="promotions__circle_left"></div>
                            <img src={stella} alt="" />
                            <div className="promotions__left_text">
                                <h1>Exclusive Beer's Promotion</h1>
                                <p>If you are into hops and barley more than barrels and casks, then check out our awesome deals on the best crafted beers around.</p>
                                <button>
                                    <h1>SHOP NOW</h1>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="promotions__right">
                    <div className="promotions__right-container">
                        <div className="promotions__upper promotion__right__image">
                            <div className="promotions__circle_right"></div>
                            <img src={henn} alt="" />
                            <div className="promotions__right_text">
                                <h1>Exclusive Wine's Promotion</h1>
                                <p>If you think the only thing better than wine and cheese is two bottles of wine and cheese, then browse our latest deals on wine from Europe and around the world!</p>
                                <button>
                                    <h1>SHOP NOW</h1>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promotions