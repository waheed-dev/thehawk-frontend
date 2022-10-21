import endpoints from '@/config/endpoints';
import url from '@/config/url';
import axios from 'axios';
import moment from 'moment';
import Link from 'next/link';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from 'react-slick'
import slugify from 'slugify';
export default function BreakingNews() {
    const settings = {
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

    const [posts, setposts] = useState([])
    const loadBreakingPost = async () => {
        try {
            const { data } = await axios.get(endpoints.post.breaking)
            setposts(data.post)
        } catch (error) {

        }
    }
    useEffect(() => {
        loadBreakingPost()
    }, [])
  return (
      <>
          <div id="news-ticker">
              <Slider   {...settings}>
                  {
                      posts?.map((post) => (
                          <>
                              <div className="item">
                                  <span>{post?.subCategory?.name }</span>
                                  <h4>
                                      <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id' , post._id)}>
                                          <a >
                                              {
                                                  post.postitle
                                              }
                                          </a>
                                      </Link>
                                 
                                  </h4>
                                  <p>Posted on : {moment(post.createdAt).format("MMMM")} {moment(post.createdAt).format("D")}, {moment(post.createdAt).format("Y")}</p>
                              </div>
                          </>
                      ))
                  }
                
        
              </Slider>


          </div>
    </>
  )
}
