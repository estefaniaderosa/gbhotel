import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

export const Hero = () => {
    return (
        <div className="hero-container">
            <video src='https://github.com/estefaniaderosa/gbhotel/blob/gh-pages/video/beach2.mp4?raw=true' autoPlay muted loop/>
            <h1>Grand Beach Hotel</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Link to="/book"className='btnn btnn--white btnn--animated'> BOOK NOW</Link>
            </div>
        </div>
    )
}

