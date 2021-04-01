import React, {useState} from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer= ()=> {
        const [email, setEmail] = useState('')
        const [emailError, setEmailError] = useState(true);

        const handleValidation = (e) => {
          setEmail(e.target.value)
          !/.+@[^@]+.[^@]{2,}$/.test(
            e.target.value
          )
            ? setEmailError(true)
            : setEmailError(false)
        }

  return (
    <div className='footer-container' >
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our newsletter to receive our best deals!
        </p>
        <p className='footer-subscription-text'>You can unsubscribe at any time.</p>
    <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              value={email}
              onChange={handleValidation}  
            />

            {email !== '' && !emailError ? <Link className='subs'to='/subscribed'>Subscribe</Link> : null}
            
          </form>
      </div>
        </section>
 

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/gbhotel'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook/>
            </Link>
            
            <Link
              class='social-icon-link instagram'
              to='/gbhotel'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram/>
            </Link>

            <Link
              class='social-icon-link youtube'
              to='/gbhotel'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>

            <Link
              class='social-icon-link twitter'
              to='/gbhotel'
              target='_blank'
              aria-label='Twitter'
            >
             <FaTwitter/>
            </Link>

            <Link
              class='social-icon-link linkedin'
              to='/gbhotel'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin/>
            </Link>
          </div>
          <div class='website-rights'>Made with &hearts; by Estefania De Rosa </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;