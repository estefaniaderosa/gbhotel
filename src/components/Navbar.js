import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FaHotel, FaBars, FaTimes} from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';

const Navbar = () => {
const [click, setClick]= useState(false);
const [button,setButton] = useState(true);

const handleClick = () => setClick(!click); //lo pasa a lo opuesto en lo que este si es true a false si es false a true
const closeMobileMenu = () => setClick(false); 

const showButton = () => {
    if(window.innerWidth <=960){
        setButton(false);
    } else {
            setButton(true);
        }
    }

    useEffect(()=>{
        showButton();
    },[]);

window.addEventListener('resize',showButton);

    return(
        <>
          <div className="navbar">
              <div className="navbar-container container">
                  <Link to='/gbhotel/' className="navbar-logo" onClick={closeMobileMenu} >
                      <FaHotel className="navbar-icon" />
                      GRAND BEACH
                  </Link>
                  <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars/>}
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li className="nav-item">
                          <Link to='/rooms' className="nav-links" onClick={closeMobileMenu} >Rooms</Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/tours' className="nav-links" onClick={closeMobileMenu}>Tours</Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/reviews' className="nav-links" onClick={closeMobileMenu}>Reviews</Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/aboutus' className="nav-links" onClick={closeMobileMenu}>About us</Link>
                      </li>
                      {/* <li className="nav-btn">
                          {button ? (
                               <li className="nav-item">
                                   <Link to='/book' className="nav-links" onClick={closeMobileMenu}>RESERVATIONS</Link>
                                   </li>
                          ) : (
                              <Link to='/book' className="btn-link" onClick={closeMobileMenu}>
                                  <Button buttonStyle="btn--outline" buttonSize='btn--mobile'>BOOK NOW</Button>
                              </Link>
                          )}
                      </li> */}
                      
                  </ul>
              </div>
          </div>
        </>
    );
}

export default Navbar;