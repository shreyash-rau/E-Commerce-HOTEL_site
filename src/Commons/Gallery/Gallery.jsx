import React from 'react';

import "../Gallery/Gallery.scss"

import Headtitle from "../../Components/HeadTitle/Headtitle"
import Cards from './Cards';
import GalleryData from './GalleryData';

function Gallery() {
  return (
    <>
    <Headtitle/>

    <section className="gallery top">
      <div className="conatainer grid">

        {
          GalleryData.map((value) =>{
            return <Cards images={value.image}
             title={value.title} infor={value.info}/>
          })
        }
      </div>
    </section>



    </>
  )
}

export default Gallery;