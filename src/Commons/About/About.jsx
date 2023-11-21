


import React from 'react'
import AboutCard from './AboutCard'
import Headtitle from '../../Components/HeadTitle/Headtitle';

import "../About/About.scss";


function About() {
  return (<>

    <Headtitle />

    <section className='about top'>
      <div className='conatainer'>
        <AboutCard />
      </div>
    </section>


    <section className="features top">
      <div className="conatainer aboutCard flex_space">

        <div className="row row1">
          <h1>Our <span>Features</span></h1>
          <p>Design-led and story-inspired, our guest rooms are as comfortable as they are beautiful. Sink into the plush bedding, admire the handcrafted details and enjoy elevated touches that restore and recharge.</p>
          <p>With complimentary Wi-Fi, 24-hour business services and 24-hour fitness centers, we’ve got you covered when it comes to staying connected, productive and energized during your stay.</p>
          <button className="secondary-btn">
            Explore More &nbsp;
            <i className='fas fa-long-arrow-alt-right' />
          </button>
        </div>
        <div className="row image">
          <img src="https://tranquil-licorice-79e76f.netlify.app/images/feature-img-1.jpg" alt="" />
        </div>
      </div>
    </section>


  </>)
}

export default About
