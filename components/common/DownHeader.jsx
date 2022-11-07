import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import url from '@/config/url';
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import BreakingNews from './BreakingNews';
import { useRouter } from 'next/router';
export default function DownHeader() {

    const router = useRouter()
    // console.log(router.asPath);
    return (
        <>
            <div className="header">
                <div className="col-md-12">
                    <div className="col-md-12">

                        <div className="col-md-4 logo">
                            {
                                router.asPath === url.home ? <h1>
                                    <Link href={url.home}>
                                        <a className='headerlogo'>The Hawk</a>
                                    </Link>

                                </h1> : <h2>
                                    <Link href={url.home}>
                                        <a className='headerlogo'>The Hawk</a>
                                    </Link>

                                </h2>
                            }
                         
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
