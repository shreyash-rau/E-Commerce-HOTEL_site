import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>We have staff to provide top-notch or Exceptional services and luxurious Accommodations with the comfort and luxury of your rooms.</p>
            <br />
            <p> Taking Care - Culinary Delights, Culinary Delights, Amenities and Facilities, Safety Measures, Sustainability Practices. </p>
            <div className='icon flex_space'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-pinterest'></i>
              <i className='fab fa-youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link to='/destinations'>Destinations</Link>
              </li>
              <li>
                <Link to='/blogs'>Blog</Link>
              </li>
              <li>
                <Link to='/testimonial'>Testimonial</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p>Nominated in International Hotel Price Award</p>
                <label className='fa fa-calendar-alt'></label>
                <span>21 Nov, 2023</span>
              </li>
              <li>
                <p>Providing Meal With Word Best Chef - Blog By Jem Card</p>
                <label className='fa fa-calendar-alt'></label>
                <span>18 Oct 2023</span>
              </li>
              <li>
                <p>Article - Fully Satisfied Costomer Said by News Paper</p>
                <label className='fa fa-calendar-alt'></label>
                <span>08 Jan 2023</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>NEWSLETTER</h2>
            <p>To exploring hotel, feel free to contact and SUBSCRIBE.</p>

            <input type='text' id='' />
            <input type='text' className='primary-btn' value='SUBSCRIBE' />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2023 All Rights Reserved - SR</p>
      </div>
    </>
  )
}

export default Footer;