import React from 'react';
import {Link} from 'react-router-dom';
import './Form.css';

const Form = () => {
    return (
        <>
            <div className="book-container">
                <div className="section-book">

                    <div className="book">
                        <div className="book__form">
                            <form action="#" className="form">
                                <div className="u-margin-bottom-medium">
                                    <h2 className="form-title">Start booking now</h2>
                                </div>

                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Full name" id="name" required />
                                    <label for="name" className="form__label">Full name</label>
                                </div>

                                <div className="form__group">
                                    <input type="email" className="form__input" placeholder="Email address" id="email" required />
                                    <label for="email" className="form__label">Email address</label>
                                </div>

                                <div className="form__group u-margin-bottom-big">
                                    <div className="form__date">
                                        <label for="start">Check-in</label>
                                        <input type="date" id="start" name="trip-start" min="2021-04-01"
                                            max="2022-12-31" />
                                    </div>

                                    <div className="form__date">
                                        <label for="start">Check-out</label>
                                        <input type="date" id="start" name="trip-start" min="2021-04-01"
                                            max="2022-12-31" />
                                    </div>

                                    <div className="select-type">
                                        <input type="radio" id="Hotel" name="option" value="Hotel" />
                                        <label for="Hotel">Hotel</label>
                                        <input type="radio" id="Tour" name="option" value="Tour" />
                                        <label for="tour">Tour</label>
                                    </div>
                                </div>

                                <div className="form__group">
                                   <Link to="/gbhotel"> <button className="boton"><p>Search</p></button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;
