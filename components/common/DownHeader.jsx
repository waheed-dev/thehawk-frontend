import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import url from '@/config/url';
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import BreakingNews from './BreakingNews';
export default function DownHeader() {


    return (
        <>
            <div className="header">
                <div className="col-md-12">
                    <div className="col-md-12">

                        <div className="col-md-4 logo">
                            <h1>
                                <Link href={url.home}>
                                    <a >The Hawk</a>
                                </Link>
                               
                            </h1>
                        </div>


                        <div className="col-md-8">
                            <div className="news-ticker">

                           <BreakingNews/>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
