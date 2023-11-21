import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import All_Item from '../All_Item';
import Des_Data from '../Des_Data';

import Headtitle from "../../../Components/HeadTitle/Headtitle";
import EmptyFile from '../../../Components/EmptyFile/EmptyFile';


import "../DesInfoPage/DesInfoPage.scss"

function DesInfoPage() {

  const { id } = useParams();

  const [ item, setItem ] = useState(null);

  useEffect(() => {
    let item = Des_Data.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item)
    }
  }, [id])

  return (
    <>
      <Headtitle />

      { item ? ( 

        <section className="single-page top">
          <div className="conatainer">

            <Link to="/destinations" className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left' /> &nbsp;
              Go Back </Link> 
            <article className="content flex">
              <div className="main-content">
                <img src={item.image} alt="imagte" />
              <p>{item.desc}</p>
              {/* <p>{item.desc}</p> */}

              <div className="para flex_space">
                <p>{item.sidepara}</p>
                {/* <p>{item.sidepara}</p> */}
              </div>

              <h1>What in the {item.title} City ?</h1>
              <p>{item.desc}</p>

              <div className="image grid1">
                <img src={item.paraImage_one} alt="" />
                <img src={item.paraImage_two} alt="" />
              </div>
              {/* <p>{item.desc}</p> */}
              </div>

              <div className="side-content">
                <div className="box">
                  <h2>How Can I Help You ?</h2>
                  <p>{item.contact_para}</p>
                  <button className='outline-btn'>
                    <i className='fa fa-phone-alt' ></i>
                    &nbsp; Contact Us
                  </button>
                </div>

                <div className="box2">
                <p>{item.img_info}</p>
                </div>
              </div>



            </article>

          </div>
        </section>

      ) : (<EmptyFile />)} 

    </>
  )
}

export default DesInfoPage;