import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Logo_data from './Logo_data';

import "./Logo.scss";

function Logo() {

    const settings = {
        dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

    return (
        <>

            <section className="collection">
                <div className="conatainer top">
                    <Slider {...settings}>

                        {
                            Logo_data.map((value, i) => {
                                return (
                                    <div className="box">
                                        <img src={value.cover} alt="" />
                                    </div>
                                )
                            })
                        }
                    </Slider>

                </div>
            </section>


        </>
    )
}

export default Logo;