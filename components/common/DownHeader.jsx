import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function DownHeader() {
    var settings = {
        dots: false,
        arrows: false,
        // arrows: true,
        speed: 800,
        autoplay: true,
        vertical: true,
        autoplaySpeed: 5000,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    return (
        <>
            <div className="header">
                <div className="col-md-12">
                    <div className="col-md-12">

                        <div className="col-md-4 logo">
                            <h1><a href="./index.html">Gazeta</a></h1>
                        </div>


                        <div className="col-md-8">
                            <div className="news-ticker">

                                <div id="news-ticker">
                                    <Slider   {...settings}>
                                        <div className="item">
                                            <span>Entertainment</span>
                                            <h4><a href="./single_post.html">Movie : Mother - Real Beauty Comes from the Inside of a Woman</a></h4>
                                            <p>Posted on : November 4, 2014</p>
                                        </div>
                                        <div className="item">
                                            <span>Sport</span>
                                            <h4><a href="./single_post.html">Temper Cum Soluta Nobis Eleifend Option Congue Nihil</a></h4>
                                            <p>Posted on : November 2, 2014</p>
                                        </div>
                                        <div className="item">
                                            <span>Business</span>
                                            <h4><a href="./single_post.html">Duis autem vel irure dolor in hendrerit in vulputate</a></h4>
                                            <p>Posted on : November 1, 2014</p>
                                        </div>
                                    </Slider>


                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
