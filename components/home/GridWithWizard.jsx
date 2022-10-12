import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function GridWithWizard({ categoryDetail, subCategory, posts }) {
    var settings = {
        // dots: false,
        // arrows: false,
       arrows: true,
        // speed: 800,
        autoplay: true,
        draggable:true,
        // vertical: true,
        autoplaySpeed: 2000,
        // centerMode: false,
        slidesToShow: 3,
        // slidesToScroll: 1,

    };
    const postitleLength = 58
    const postTextLength =202
  return (
    <>
          <div class="p-news-big container">
              <h5><span>{categoryDetail.category }</span></h5>

              <div class="col-md-12">
                  <div id="pnews-slider">
                      <Slider   {...settings}>
                          
                          {
                              posts.map((post) => (
                                  <>
                                      <div class="ps-info">
                                          <div class="psi-thumb">
                                              {
                                                  subCategory.filter((filtered) => filtered._id === post.subCategory.id )
                                                      .map((cubCat) => (
                                                          <>
                                                              <div class="cat-tag">
                                                                  {
                                                                      cubCat.subCategoryName
}
                                                              </div>
                                                          </>
                                              ))
                                              }
                                             
                                              <img src={post.img.replace('/upload/' , '/upload/w_350,h_250/')} class="img-responsive" alt="" />
                                          </div>
                                          <h4><a href="./single_post.html">
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
                                          </a></h4>
                                          <span>Posted on November 16, 2014</span>
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
                                          <a href="#" class="psi-more">Continue Reading &#8594;</a>
                                      </div>
                                  </>
                                
                              ))
                   }
                   

                      </Slider>

                  </div>
              </div>
          </div>
    </>
  )
}
