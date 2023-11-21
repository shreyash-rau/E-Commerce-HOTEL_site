import React from 'react'
import MostPopularHotelCard from './MostPopularHotelCard'

import "../Most_Popular_hotel/MostPopularHotel.scss"

function MostPopularHotel() {
    return (
        <>
            <section className="popular">
                <div className="full_container">
                    <div className="heading">
                        <h1>Most Popular Hotel</h1>
                        <div className="line"></div>
                    </div>
                    
                    <div className="content">
                        <MostPopularHotelCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default MostPopularHotel;