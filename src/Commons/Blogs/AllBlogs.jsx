import React, { useState } from 'react'
import BlogData from './BlogData';
import BlogCard from './BlogCard';



function AllBlogs() {

    const [items, setItems] = useState(BlogData);

    return (
        <>

            <section className="blog top">
                <div className="conatainer">
                    <div className="content grid">
                        {
                            items.map((item) => {
                                return <BlogCard key={item.id} item={item} />
                            })
                        }
                    </div>
                </div>
            </section>



        </>
    )
}

export default AllBlogs;