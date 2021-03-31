import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

export const Hero = () => {
    return (
        <div className="hero-container">
            <video src='/video/beach2.mp4' autoPlay muted loop/>
            <h1>Grand Beach Hotel</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Link to="/book"className='btnn btnn--white btnn--animated'> BOOK NOW</Link>
            </div>
        </div>
    )
}

