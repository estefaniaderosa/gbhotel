import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css';



const Card = ({image,title,char1,char2,char3,char4,char5,price}) => {

    return (
        <div className='card'>
                    <div className="card__side card__side--front">
                        <div className="card__picture" style={{backgroundImage: image }}>
                            &nbsp;
                        </div>
                        <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--1">{title}</span>
                        </h4>
                        <div className="card__details">
                            <ul>
                                <li>{char1}</li>
                                <li>{char2}</li>
                                <li>{char3}</li>
                                <li>{char4}</li>
                                <li>{char5}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-1">
                        <div className="card__cta">
                            <div className="card__card__price-box">

                                <p className="card__price-value">{price}</p>
                                <p className="card__price-only">per night</p>
                            </div>
                            <Link to='/book' className="button button--white">Book now!</Link>    
                        </div>
                    </div>
        </div>
           )
}

export default Card;
