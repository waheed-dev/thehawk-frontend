import React from 'react'
import AddToTopPost from './AddToTopPost'
import BlueNewsSection from './BlueNewsSection'
import CommonCategoryNews from './CommonCategoryNews'
import LatestNews from './LatestNews'
import PopularNews from './PopularNews'
/* eslint-disable react/no-unescaped-entities */


export default function MainContent({ posts, category, subCategory  }) {
  return (
      <>
    



          <div className="main-content container">
            
              <div className="col-md-8 block-1">
                  <div className="row">
                      <AddToTopPost posts={posts} />

                      <LatestNews posts={posts} />
                 
                  </div>
                  {
                      category &&
                      category
                         
                          .filter((filtered) => filtered.addToComminSection === true)
                          .sort(
                              (a, b) =>
                                  new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                          )
                          .slice(0, (category.filter((filtered) => filtered.addToComminSection === true)).length / 2)
                          .map((categoryDetail) => (
                              
                              <>
                                  <CommonCategoryNews categoryDetail={categoryDetail} subCategory={subCategory.filter((curElem) => curElem.categoryId === categoryDetail._id)} posts={posts.filter((catFiltered) => catFiltered.category.id === categoryDetail._id)
                                     } />
                              </>
                          ))
                  }
                

              </div>

              <aside className="col-md-4">

                  <PopularNews posts={posts} />

                  <div className="side-widget sw-banner">
                      <a href="#"><img src="images/banner/2.jpg" className="img-responsive" alt="" /></a>
                  </div>

               

                  <div className="side-widget sw-video">
                      <h5><span>Featured Video</span></h5>
                      <div className="sw-inner">
                          <ul>
                              <li>
                                  <div className="swv-thumb">
                                      <img src="images/aside/7.jpg" className="img-responsive" alt="" />
                                  </div>
                                  <span>Travelling</span>
                                  <h4><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></h4>
                              </li>
                              <li>
                                  <i className="fa fa-video-camera"></i>
                                  <span>Entertainment</span>
                                  <h4><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></h4>
                              </li>
                              <li>
                                  <i className="fa fa-video-camera"></i>
                                  <span>Sport</span>
                                  <h4><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></h4>
                              </li>
                          </ul>
                      </div>
                  </div>

               

                  <div className="side-widget sw-contributors">
                      <h5><span>Contributors</span></h5>
                      <div className="sw-inner">
                          <ul>
                              <li><a href="./contributor.html"><img src="images/aside/1/1.jpg" className="img-responsive" alt="" /></a></li>
                              <li><a href="./contributor.html"><img src="images/aside/1/2.jpg" className="img-responsive" alt="" /></a></li>
                              <li><a href="./contributor.html"><img src="images/aside/1/3.jpg" className="img-responsive" alt="" /></a></li>
                              <li><a href="./contributor.html"><img src="images/aside/1/4.jpg" className="img-responsive" alt="" /></a></li>
                              <li><a href="./contributor.html"><img src="images/aside/1/5.jpg" className="img-responsive" alt="" /></a></li>
                              <li><a href="./contributor.html"><img src="images/aside/1/6.jpg" className="img-responsive" alt="" /></a></li>
                              <li><a href="./contributor.html"><img src="images/aside/1/7.jpg" className="img-responsive" alt="" /></a></li>
                              <li><a href="./contributor.html"><img src="images/aside/1/8.jpg" className="img-responsive" alt="" /></a></li>
                          </ul>
                      </div>
                  </div>

                
              </aside>
              
          </div>
    </>
  )
}
