import React from 'react'
import {Link} from 'react-router-dom'
import './Tour.css'

const Tour = (props) => {
    return (
        <>
         <div className="tour-container">
             <div className="tour-image" style={{backgroundImage: props.image}}></div>
             <h2>{props.title}</h2>
             <p>{props.content}</p>
             <Link to='/book' className='tour-info btn--primary'>{props.extra}</Link>
        </div>   
        </>
    )
}

export default Tour;
