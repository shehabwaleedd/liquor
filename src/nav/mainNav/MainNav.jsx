import React from 'react'
import './MainNav.css'
import logo from '../../Assets/minimalistic-logo-cleopatra-drinking-beer--pharaon__4___1_-removebg-preview.png'


const MainNav = () => {
    return (
        <nav className='nav'>
            <div className="nav__container">
                <div className="nav__left">
                    <div className="nav__logo">
                        <img src={logo} alt="logo" />
                        <h1>Cairo Brews</h1>
                    </div>
                </div>
                <div className="nav__center">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link shop">Shop</a>
                            <i className='bx bx-chevron-down' ></i>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">Services</a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">Portfolio</a>
                        </li>
                        <li className="nav__item" id='sale'>
                            <a href="#contact" className="nav__link ">Sale</a>
                        </li>
                    </ul>
                </div>
                <div className="nav__right">
                    <div className="nav__button">
                        <i className='bx bx-search'></i>
                    </div>
                    <div className="nav__button">
                        <i className='bx bx-cart-alt' ></i>      
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default MainNav