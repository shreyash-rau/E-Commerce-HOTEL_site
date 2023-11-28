import React, { useState } from 'react';
import { Link } from 'react-router-dom';




export default function Navbar() {

  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (<>
    <nav className="navbar">
      <div className="conatainer flex_space">
        <div className="menu-icon" onClick={handleClick}>
          <i class={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
       
        <ul className={click ? "nav-menu active" : "nav-menu"}>          
          <li> <Link to="/" onClick={closeMobileMenu} > Home</Link></li>
          <li> <Link to="/about" onClick={closeMobileMenu} > About Us</Link></li>
          <li>  <Link to="/gallery" onClick={closeMobileMenu} > Gallery</Link></li>
          <li>  <Link to="/destinations" onClick={closeMobileMenu} > Destinations</Link></li>
          <li>  <Link to="/blogs" onClick={closeMobileMenu} > Blogs</Link></li>
          <li>  <Link to="/testimonial" onClick={closeMobileMenu} > Testimonial</Link></li>
          <li>  <Link to="/contact" onClick={closeMobileMenu} > Contact Us</Link></li>
        </ul>
   
        <div className="login-area flex">
          <li>
            <Link to='/sign-in'>
              <i class='far fa-chevron-right'></i>Sign in
            </Link>
          </li>
          <li> &nbsp;
            <Link to='/register'>
              <i class='far fa-chevron-right'></i>Register
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button className='primary-btn'>Request a Quote</button> </Link>
          </li>
        </div>
      </div>
    </nav>

    <header>
      <div className="conatainer flex_space">
        <div className="logo">
          {/* Luxury Hitel Logo url */}
          <img src="https://template82558.motopreview.com/mt-demo/82500/82558/mt-content/uploads/2019/06/mt-1835-logo.png" alt="logo img" />
        </div>
        <div className="conatct flex_space">
          <div className="box flex_space">
            <div className="icons">
              <i className="far fa-clock"></i>
            </div>
            <div className="text">
              <h4>Working Hours</h4>
              <Link to="/contact"> Monday - Sunday : 9.00am to 5.00pm </Link>
            </div>
          </div>

          <div className="box flex_space">
            <div className="icons">
              <i className="fas fa-phone-volume"></i>
            </div>
            <div className="text">
              <h4>Call Us</h4>
              <Link to="/contact"> +91 88888 72065 </Link>
            </div>
          </div>

          <div className="box flex_space">
            <div className="icons">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="text">
              <h4>Mail Us</h4>
              <Link to="/contact"> Shreyash@inboxkitten.com </Link>
            </div>
          </div>

        </div>
      </div>
    </header>
  </>)
}



