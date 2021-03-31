import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="about">
            <div className="about-main-container">
            <div className="about-text-container">
            <h1>More than a sleeping place</h1>

            <p>
            This excellently located resort, run by a couple opened its doors to the public in 2001. 
            With its friendly cottages just off the beach, you'll have opportunity to relax here.
            In our super luxury rooms, even the most spoiled world traveller will feel at home. You will certainly feel relaxed and spoiled in our super de luxe rooms!
            </p>

            <p>
            You can also experience an intimate gourmet dinner with an incredible view: the Caribbean sea.
            Enveloped by the eternal blue sky and the infinite blue sea, our restaurant invite couples and families to the ultimate stellar dining experience with exceptional gourmet creations.
            </p>

            <p>
            At Grand Beach we offer several options for enjoying the sea. The nearby diving center allows you to go underwater, a preferred area also for snorkeling. At the hotel’s reception area you can also book sailboat trips on beautiful 12 meter-class boats. You’ll also find activities such as trekking in the jungle, tennis, soccer and a gym.
For lovers of golf, just 35 minutes from the hotel , you’ll find a beautiful Golf Club with 18 holes, immersed in the landscape and characteristic vegetation of the area.
            </p>
            </div>

            <div className="about-image-container">
                <img src='https://images.unsplash.com/photo-1528916138893-06acfc566dea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=881&q=80' alt='beach'/>
                <img src='https://images.unsplash.com/photo-1506079334139-58105ce48c5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80' alt='bar '/>
            </div>
            </div>
        </div>
    )
}

export default AboutUs;
