import React from 'react'
import { useEffect } from 'react'
import './ArcText.css'

const ArcText = () => {


    return (
        <div className='arc'>
            <div className="rotate__circle">
                <svg id="rotatingText" viewBox="0 0 200 200" width="200" height="200">
                    <defs>
                        <path id="circle" d="M 100, 100
                        m -75, 0
                        a 75, 75 0 1, 0 150, 0
                        a 75, 75 0 1, 0 -150, 0">
                        </path>
                    </defs>
                    <text width="700">
                        <textPath alignment-baseline="top" href="#circle" className="text">
                            SHOP NOW - SHOP NOW - SHOP NOW - SHOP NOW-
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    )
}

export default ArcText