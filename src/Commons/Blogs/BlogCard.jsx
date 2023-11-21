import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ item : {id ,date, catgeory, title ,cover ,para, para2, desc, desc2} }) {
  return (
    <>

    <div className="items">
        <div className="img">
            <img src={cover} alt="" />
        </div>

        <div className="category flex_space">
            <span>{date}</span>
            <label>{catgeory}</label>
        </div>

        <div className="details">
            <h3>{title}</h3>
            <p>{para}</p>
            &nbsp; &nbsp;
        </div>
        &nbsp;
        <Link to ={`/blogspage/${id}`} className='blogItem-link'>
            
            Read More &nbsp; <i className='fa fa-long-arrow-right'></i>
        </Link>
      

    </div>
    
    
    
    
    </>
  )
}

export default BlogCard;