import React from 'react'
import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


import url from '@/config/url';
import Link from 'next/link';
import slugify from 'slugify';
import moment from 'moment';
import HorizontalAds from '../common/HorizontalAds';

export default function GridWithWizard({ categoryDetail, subCategory, posts }) {


    var settings = {

        arrows: true,

        autoplay: true,
        draggable: true,
        infinite: true,
        autoplaySpeed: 1000,
 
        slidesToShow: 3,
 
        responsive: [
            {
                breakpoint: 1028,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };
    const postitleLength = 58
    const postTextLength = 202
    return (
        <>
            <div className="p-news-big container">
                <h5><span>{categoryDetail.category}</span></h5>

                <div className="col-md-12">
                    <div id="pnews-slider">
                        <Slider   {...settings}>

                            {
                                posts.map((post) => (
                                    <>
                                        <div className="ps-info">
                                            <div className="psi-thumb">
                                                {
                                                    subCategory.filter((filtered) => filtered._id === post.subCategory.id)
                                                        .map((subCat) => (
                                                            <>
                                                                <div className="cat-tag">
                                                                    <Link href={url.subCategory.single.replace(':name', slugify(subCat.subCategoryName)).replace(':id', subCat._id)}>

                                                                        <a style={{
                                                                            color: '#fff'
                                                                        }}>
                                                                            {
                                                                                subCat.subCategoryName
                                                                            }
                                                                        </a>
                                                                    </Link>

                                                                </div>
                                                            </>
                                                        ))
                                                }

                                                <img loading='lazy' src={post.img} className="img-responsive" alt="post img" />
                                            </div>
                                            <h4>
                                                <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>


                                                    <a >
                                                        {
                                                            post.postitle.length > postitleLength ? <>
                                                                {
                                                                    post.postitle
                                                                        .substr(0, postitleLength)
                                                                        .substr(
                                                                            0,
                                                                            Math.min(
                                                                                post.postitle.length,
                                                                                post.postitle.lastIndexOf(' ')
                                                                            )
                                                                        ) + ' ...'
                                                                }
                                                            </> : <>
                                                                {
                                                                    post.postitle
                                                                }
                                                            </>
                                                        }
                                                    </a>
                                                </Link>
                                            </h4>
                                            <span>{moment(post.createdAt).format("MMMM")} {moment(post.createdAt).format("D")}, {moment(post.createdAt).format("Y")}</span>
                                            <p>
                                                {
                                                    post.postText.length > postTextLength ? <>
                                                        {
                                                            post.postText
                                                                .substr(0, postTextLength)
                                                                .substr(
                                                                    0,
                                                                    Math.min(
                                                                        post.postText.length,
                                                                        post.postText.lastIndexOf(' ')
                                                                    )
                                                                ) + ' ...'
                                                        }
                                                    </> : <>
                                                        {
                                                            post.postitle
                                                        }
                                                    </>
                                                }
                                            </p>
                                            <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>

                                                <a className="psi-more">Continue Reading &#8594;</a>
                                            </Link>
                                        </div>
                                    </>

                                ))
                            }


                        </Slider>

                    </div>
                </div>

            </div>
            <HorizontalAds />
        </>
    )
}
