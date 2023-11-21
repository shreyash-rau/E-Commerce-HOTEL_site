import React from 'react'
import { Link } from 'react-router-dom';

function Des_Card({ item: {id, title, image, desc, contact_para, img_info, sidepara, paraImage_one, paraImage_two} }) {
    return (
        <>
            <div className="items">
                <div className="img">
                    <img src={image} alt="Gallery Image" />

                    <Link to={`/desinfopage/${id}`} className='blogItem-link' >
                        <i className='fas fa-external-link-alt' />
                    </Link>

                </div>
                <div className="title">
                    <h3>{title}</h3>
                </div>
            </div>
        </>
    )
}

export default Des_Card;