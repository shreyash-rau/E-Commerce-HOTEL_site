import React from 'react';
import All_Item from '../../Destination/All_Item';

function DestinationHome() {
  return (
    <>
    <section className="popular">
      <div className="full_container">
        <div className="heading">
          <h1>Most Popular Destinations</h1>
          <div className="line"></div>
        </div>
        <div className="content">
          <All_Item/>
        </div>
      </div>
    </section>
    </>
  )
}

export default DestinationHome;