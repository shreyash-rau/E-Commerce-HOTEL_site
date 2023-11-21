import React from 'react'
import Slide from './Slide'
import Data from './Data';


import "../Home-Section/Home.scss";

export default function Hero() {
  return (
    <>
       <Slide slides={Data} />
    </>
  )
}
