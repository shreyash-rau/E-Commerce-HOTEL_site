import React from 'react';
import Work_Data from './Work_Data';
import Work_Card from './Work_Card';

import "./Work.scss";

function Work() {
    return (
        <>



            <section className="popular works">
                <div className="conatainer">
                    <div className="heading">
                        <h1>How It's Works</h1>
                        <div className="line"></div>
                    </div>

                    <div className="content grid">
                            {
                                Work_Data.map((value, i) => {
                                    return <Work_Card key={i}
                                        cover={value.cover}
                                        title={value.title}
                                        desc={value.desc} />
                                })
                            }
                        </div>

                </div>
            </section>


        </>
    )
}

export default Work;