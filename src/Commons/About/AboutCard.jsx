import React from 'react'

function AboutCard() {
  return (<>

    <div className='aboutCard mtop flex_space'>
      <div className="row row1">
        <h4>About Us</h4>
        <h1>We <span>Provide Solution</span> to grow bussiness</h1>
        <p>Although the entire hospitality industry has been undoubtedly rocked by the pandemic,
          there’s no denying that the majority of hotel research and reservations are still being made online.
          Indeed, according to Condor Ferries, 700 million people are expected to book their hotel rooms online by 2023,
          with 83% of US consumers already making their travel plans digitally.</p>
        <p>Such figures only serve to highlight the importance of digital marketing for hotels,
          but they also come with a notable caveat: according to EU industry body Hotrec, direct hotel bookings decreased
          from 58% in 2013 to 46% in 2019. Instead, intermediary websites – such as Booking and Expedia – are taking a bigger share of the
          visibility pie each year, resulting in increased commission costs and platform overdependence for hotels.</p>
        <button className="secondary-btn">
          Explore More &nbsp;
          <i className='fas fa-long-arrow-alt-right' />
        </button>
      </div>

      <div className="row image">
        <img src="https://tranquil-licorice-79e76f.netlify.app/images/about-img-1.jpg" alt="" />
        <div className="control-btn">
          {/* <button className="prev">
          <i className='fas fa-play' />
          </button> */}
        </div>
      </div>
    </div>

  </>)
}

export default AboutCard;