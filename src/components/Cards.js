import React from 'react';
import Card from './Card';


const Cards = () => {
    return (
        <>
        <h1 className='r-title'>Choose your experience</h1>
        <div className='flex-container' style={{display:'flex',flexWrap:'wrap',justifyContent: 'space-around',margin:'40px 0px 80px 0px'}}>
            <Card
             title='Double Room' 
             image='url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80)'
             price='130€'
             char1='Garden and Sea views'
             char2='Up to 2 passengers'
             char3='Double Bed'
             char4='Daily room cleaning'
             char5='Breakfast included'

             />
            
            <Card 
            title='Luxury Suite'
             image='url(https://images.unsplash.com/photo-1528301719638-3f517aebc11c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80)'
             price='230€'
             char1='Private balcony with Sea views'
             char2='Up to 2 passengers'
             char3='Queen-size Bed'
             char4='Daily room cleaning'
             char5='2 meals included'
            />
           
            <Card 
            title='Grand Suite' 
            image='url(https://images.unsplash.com/photo-1616243448073-b869bc2d473e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80)'
            price='330€'
             char1='Private Roof with Sea Views'
             char2='Private Pool'
             char3='King-size Bed'
             char4='Daily room cleaning'
             char5='All meals included'
             />
            
        </div>
        </>
    )
}

export default Cards;
