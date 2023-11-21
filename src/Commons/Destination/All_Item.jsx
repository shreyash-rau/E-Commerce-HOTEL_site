import React, { useState } from 'react'
import Des_Card from './Des_Card';
import Des_Data from './Des_Data';

function All_Item() {

    const [items, setItems] = useState(Des_Data);

    return (
        <>
            <section className="gallery desi mtop">
                <div className="conatainer">
                    <div className="content grid">

                        {
                            items.map((item) => {
                                return <Des_Card key={item.id} item={item} />
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default All_Item;