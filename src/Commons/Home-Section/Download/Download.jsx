import React from 'react';
import "./Download.scss";

function Download() {
    return (
        <>


            <section className='download'>
                <div className='conatainer flex_space'>
                    <div className='row'>
                        <h3>Download our app</h3>
                        <h1>Wow! Get This Templete App For Your Mobile</h1>
                        <ul>
                            <li>&#10003; Find nearby hotel in your network with templete</li>
                            <li>&#10003; Get paperless confirmation</li>
                            <li>&#10003; Make changes whenever, wherever</li>
                            <li>&#10003; 24/7 customer service in more than 40 languages</li>
                            <li>&#10003; No booking or credit card fees</li>
                            <li>&#10003; No booking or credit card fees</li>
                            <li>&#10003; Add your own reviews and photos</li>
                        </ul>
                        <div className="img flex">
                            <img src="https://tranquil-licorice-79e76f.netlify.app/images/appstore-button.png" alt="apple store img" />
                            <img src="https://tranquil-licorice-79e76f.netlify.app/images/google-play-button.png" alt="plat store img" />
                        </div>
                    </div>
                    <div className="row row2">
                        <img src="https://tranquil-licorice-79e76f.netlify.app/images/app-image-1.png" alt="mobile app img" className="image" />
                    </div>
                </div>
            </section>


        </>
    )
}

export default Download