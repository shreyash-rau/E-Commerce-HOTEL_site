import React from 'react';

import Hero from '../Home-Section/Hero';
import Homeabout from '../Home-Section/Homeabout';
import DestinationHome from '../Home-Section/Destiny/DestinationHome';
import MostPopularHotel from '../Home-Section/Most_Popular_hotel/MostPopularHotel';
import Download from '../Home-Section/Download/Download';
import Work from '../Home-Section/Working/Work';
import Logo from '../Home-Section/Logos/Logo';




function Home() {
  return (
    <>
      <Hero />

      {/* <hr /> */}
      &nbsp;
      <Homeabout />

      &nbsp;
      <hr />

      <MostPopularHotel />

      {/* &nbsp; */}
      <hr />

      <DestinationHome />
      
      <hr />
      {/* &nbsp; */}

      <Download/>

      {/* &nbsp; */}
      <hr />
      {/* &nbsp; */}

      <Work/>
    
      {/* <hr /> */}
      {/* &nbsp; */}

      <Logo/>

      <hr />
      {/* &nbsp; */}


    </>)
}

export default Home;
