import React from 'react'
import './Review.css'

const Review = (props) => {
    return (
        <>
        <div className="story-container">   
        <div className="story">
        <figure className="story__shape">
            <img src={props.image}
                 alt={props.description} 
                 className="story__img"/>
            <figcaption class="story__caption">{props.user}</figcaption>
        </figure>

        <div className="story__text">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>

    </div>
    </div>   
        </>
    );
}

export default Review
