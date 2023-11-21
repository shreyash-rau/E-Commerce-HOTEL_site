import React, { useEffect, useState } from 'react'
import Headtitle from '../../../Components/HeadTitle/Headtitle';
import BlogData from '../BlogData';
import { Link, useParams } from 'react-router-dom';
import EmptyFile from '../../../Components/EmptyFile/EmptyFile';



function BlogsPage() {

    const { id } = useParams();
    const [item, setItem] = useState(null);
    useEffect(() => {
        let item = BlogData.find((item) => item.id === parseInt(id))
        if (item) {
            setItem(item)
        }
    }, [id])

    return (
        <>
            <Headtitle />


            {item ? (
                <section className='single-page top'>
                    <div className='conatainer'>
                        <Link to='/blogs' className='primary-btn back'>
                            <i className='fas fa-long-arrow-alt-left'></i> Go Back
                        </Link>

                        {/* --------- main-content--------- */}

                        <article className='content flex_space'>
                            <div className='main-content'>
                                <img src={item.cover} alt='' />

                                <div className='category flex_space'>
                                    <span>{item.date}</span>
                                    <label>{item.catgeory}</label>
                                </div>

                                <h1> {item.title} </h1>
                                <p>{item.desc}</p>
                                <p>{item.desc2}</p>

                                <h2>Satifaction Of Guest's</h2>

                                <div className='para flex_space'>
                                    <p>{item.para}</p>
                                    <p>{item.para2}</p>
                                </div>
                            </div>
                            {/* --------- main-content--------- */}

                            {/* --------- side-content--------- */}
                            <div className='side-content'>
                                <div className='category-list'>
                                    <h1>Categories</h1>
                                    <hr />
                                    <ul>
                                        {BlogData.map((item) => {
                                            return (
                                                <li>
                                                    <i className='far fa-play-circle'></i>
                                                    {item.catgeory}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>

                            {/* --------- side-content end--------- */}
                        </article>
                    </div>
                </section>
            ) : (
                <EmptyFile />
            )}
        </>
    )
}

export default BlogsPage;