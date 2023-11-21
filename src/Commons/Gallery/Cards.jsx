import React, { useState } from 'react'

function Cards(props) {

    const [popular, setPopolar] = useState(false)

    const toggleModel = () => {
        setPopolar(!popular)
    }

    return (
        <>
            <div className="items">
                <div className="img">
                    <img src={props.images} alt="" />
                    <i className='fas fa-image' onClick={toggleModel} />
                     </div>
                <div className="title">
                
                    <h3>{props.title}</h3>
                    <p>{props.infor}</p>
                </div>
            </div>
            {popular &&
                <div className="popup">
                    <div className="hide">
                        <div className="popup-content">
                            <button onClick={toggleModel}>Close</button>
                            <img src={props.images} alt="" />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Cards;