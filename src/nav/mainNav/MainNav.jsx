import React, { useState } from 'react'
import './MainNav.css'
import logo from '../../Assets/minimalistic-logo-cleopatra-drinking-beer--pharaon__4___1_-removebg-preview.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import beer from "../../Assets/Stella2.png"
import wine from "../../Assets/wines/Ch_Lafite_Rothschild_NV_BOT.jpeg"
import spirits from "../../Assets/spirits/Jack Daniel's Honey.jpeg"
import rds from "../../Assets/rts.webp"

const MainNav = () => {

    const [shopIsHovered, setShopIsHovered] = useState(false);
    const [beersOpen, setBeersOpen] = useState(false);
    const [wineOpen, setWineOpen] = useState(false)
    const [spiritsOpen, setSpiritsOpen] = useState(false)
    const [rdsOpen, setRdsOpen] = useState(false)

    const handleShopIsHoveredEnter = () => {
        setShopIsHovered(true)
    }

    const handleShopIsHoveredLeave = () => {
        setShopIsHovered(false)
    }

    const handleBeersOpenEnter = () => {
        setBeersOpen(true)
    }

    const handleBeersOpenLeave = () => {
        setBeersOpen(false)
    }

    const handleWineOpenEnter = () => {
        setWineOpen(true)
    }

    const handleWineOpenLeave = () => {
        setWineOpen(false)
    }

    const handleSpiritsOpenEnter = () => {
        setSpiritsOpen(true)
    }

    const handleSpiritsOpenLeave = () => {
        setSpiritsOpen(false)
    }

    const handleRdsOpenEnter = () => {
        setRdsOpen(true)
    }

    const handleRdsOpenLeave = () => {
        setRdsOpen(false)
    }


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
                        <li className="nav__item upper">

                            <div className="nav__content"  onMouseEnter={handleShopIsHoveredEnter} onMouseLeave={handleShopIsHoveredLeave}>
                                <Link className="nav__link shop upper" >Shop</Link>
                                <i className='bx bx-chevron-down' ></i>
                            </div>
                        </li>
                        <AnimatePresence>
                            {shopIsHovered && (
                                <motion.div className='upper__submenu'
                                    initial={{ y: -15 }}
                                    animate={{ y: 3 }}
                                    onMouseEnter={handleShopIsHoveredEnter} onMouseLeave={handleShopIsHoveredLeave}
                                >
                                    <motion.ul>
                                        <motion.li
                                            initial={{ x: -15 }}
                                            animate={{ x: 0 }}
                                            exit={{ x: -15, transition: { duration: 0.1 } }}
                                            onMouseEnter={handleBeersOpenEnter} onMouseLeave={handleBeersOpenLeave}
                                        >
                                            <Link to="/shop/upper/shirts" className="link link--carme" >
                                                - Beer
                                                <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                    <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                </svg>
                                            </Link>
                                        </motion.li>
                                        <AnimatePresence>
                                            {beersOpen && (
                                                <motion.div className="shirt__submenu"
                                                    initial={{ opacity: 0, x: 250 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 250 }}
                                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                                >
                                                    <img src={beer} alt="" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        <motion.li
                                            initial={{ x: -15 }}
                                            animate={{ x: 0 }}
                                            exit={{ x: -15, transition: { duration: 0.1 } }}
                                            onMouseEnter={handleWineOpenEnter} onMouseLeave={handleWineOpenLeave}
                                        >
                                            <Link to="/shop/upper/hoodies" className="link link--carme">
                                                - Wine
                                                <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                    <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                </svg>
                                            </Link>
                                        </motion.li>
                                        <AnimatePresence>
                                            {wineOpen && (
                                                <motion.div className="shirt__submenu"
                                                    initial={{ opacity: 0, x: 250 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 250 }}
                                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                                >
                                                    <img src={wine} alt="" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        <motion.li
                                            initial={{ x: -15 }}
                                            animate={{ x: 0 }}
                                            exit={{ x: -15, transition: { duration: 0.1 } }}
                                            onMouseEnter={handleSpiritsOpenEnter} onMouseLeave={handleSpiritsOpenLeave}
                                        >
                                            <Link to="/shop/upper/jackets" className="link link--carme">
                                                - Spirits
                                                <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                    <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                </svg>
                                            </Link>
                                        </motion.li>
                                        <AnimatePresence>
                                            {spiritsOpen && (
                                                <motion.div className="shirt__submenu"
                                                    initial={{ opacity: 0, x: 250 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 250 }}
                                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                                >
                                                    <img src={spirits} alt="" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        <motion.li
                                            initial={{ x: -15 }}
                                            animate={{ x: 0 }}
                                            exit={{ x: -15, transition: { duration: 0.1 } }}
                                            onMouseEnter={handleRdsOpenEnter} onMouseLeave={handleRdsOpenLeave}
                                        >
                                            <Link to="/shop/upper/t-shirts" className="link link--carme">
                                                - RDS
                                                <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                    <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                </svg>
                                            </Link>
                                        </motion.li>
                                        <AnimatePresence>
                                            {rdsOpen && (
                                                <motion.div className="shirt__submenu"
                                                    initial={{ opacity: 0, x: 250 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 250 }}
                                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                                >
                                                    <img src={rds} alt="" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">Recipies</a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">About Us</a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">Contact</a>
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