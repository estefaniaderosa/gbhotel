

import React from 'react';
import {Link} from 'react-router-dom';
import './Subscribed.css';

const Subscribed = () => {
    return (
        <>
        <div className='subs-body'>
            <h1 className='subscript-title'>Thank you for subscribing!</h1>
        <div className="fix">
            <Link className='button button--white' to='/gbhotel'> Back to Home </Link>
            </div>
        </div>
        </>
    )
}

export default Subscribed
