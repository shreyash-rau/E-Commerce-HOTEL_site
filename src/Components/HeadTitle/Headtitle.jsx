import React from 'react'
import { Link, useLocation } from 'react-router-dom';

import "../HeadTitle/Headtitle.scss";



function Headtitle() {

  const location = useLocation();

  return (<>
    <section className="image-heading">
      <div className="conatainer">
        <h1>{location.pathname.split("/")[1]}</h1>

        <button>
          <Link to="/"> Home / </Link>
          <span>{location.pathname.split("/")[1]}</span>
        </button>

      </div>
    </section>
  </>)
}

export default Headtitle;