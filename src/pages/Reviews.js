import React from 'react'
import Review from '../components/Review'
import './Reviews.css'

const Reviews = () => {
    return (
        <>
            <div className="review-page-container">
                <section className="reviews">
                    <h1 className='r-title'>Testimonials & Reviews</h1>
                    <Review
                        user='Marie Vougth'
                        title='BREATHTAKING VIEWS'
                        text="The beach and the hotel were beyond everything I expected, this was the best place I'd ever been to! My husband and I booked also for two of the tours that Grand Beach Hotel offers.
             We sailed at night and had dinner at the cruise, it was delicious and after that there was a dance party, such an amazing night. We also booked the Snorkel trip, 10000% recommended!"
                        image='https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
                        description='Passenger review'
                    />

                    <Review
                        user='Joe&Jane Doe'
                        title='DREAMED HONEYMOON'
                        text='This was the best place that we ever traveled. The hospitality was incredible. Everyone was
            unbelievably nice and willing to help with whatever requests we had. The team upgraded us to
            the nicest suite with private pool and sea view. Truly an unforgettable experience, and we
            are already planning on coming back.'
                        image='https://images.unsplash.com/photo-1616147055278-7ef47fffb88b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2249&q=80'
                        description='Passenger review'
                    />

                    <Review
                        user='John Joestar'
                        title='AWESOME TOURS'
                        text="I'm really glad I booked in Grand Beach Hotel, not only for it's beautiful and comfy rooms with THOSE views, but for their amazing tours, I booked all of them and thanks to that I got to know the beach in different manners, the experience couldn't get any better!!! Highly recommended both for the adventurous and for the ones who just like to chill at the beach! ;)"
                        image='https://images.unsplash.com/photo-1506890660141-2bd509dd80f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2623&q=80'
                        description='Passenger review'
                    />
                </section>

                <div className="readmore-container">
                    <a href="#" className="readmore">Read more</a>
                </div>

            </div>
        </>
    )
}

export default Reviews
