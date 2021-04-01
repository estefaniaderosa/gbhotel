import React from 'react'
import Tour from '../components/Tour'

const Tours = () => {
    return (
        <>
        <h1 className="tours-title">Meet Nature</h1>
        <div className="container">

            


           <Tour 
                title='Sightseeing Tour'
                content='Get to know all beaches from the sea'
                image='url(https://images.unsplash.com/photo-1613473119283-fdfee141ca86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2104&q=80)'
                extra='Book now'
            />

            <Tour 
                title='Sail at Sunset'
                content='Watch the Sun go down as never before.'
                image='url(https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80)'
                extra='Book now'
            />

            <Tour 
                title='Snorkel'
                content='Guided Snorkel tour with oceanographs.'
                image='url(https://images.unsplash.com/photo-1555837917-04ba482e17f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80)'
                extra='Book now'
            />

           

            <Tour 
                title='Squba Diving'
                content='You will feel captivated!'
                image='url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)'    
                extra='Book now'
             />


            <Tour 
                title='Jungle Adventure'
                content='Experience an adventure of a lifetime!'
                image='url(https://images.unsplash.com/photo-1549983091-48c70653663b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80)'
                extra='Book now'
            />

            <Tour 
                title='Night at the sea'
                content='Dine, dance & sleep under the stars.'
                image='url(https://images.unsplash.com/photo-1566342088293-38debd381c63?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)'
                extra='Book now'
           />   
         
            </div>

        </>
    )
}

export default Tours
