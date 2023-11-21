import React from 'react'
import Tes_Data from './Tes_Data';
import Tes_Card from './Tes_Card';

function All_Testim() {
  return (
    <>
    <section className="Testimonial mtop">
        <div className="conatainer grid1">

            {Tes_Data.map((value, i) => {
                return <Tes_Card key={i} {...value} />
            })  }

        </div>
    </section>
    </>
  )
}

export default All_Testim;