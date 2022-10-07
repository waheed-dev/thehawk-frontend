import React from 'react'
import AddToTopPost from './AddToTopPost'
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

                  <div className="side-widget sw-twitter">
                      <h5><span>Twitter Feed</span></h5>
                      <div className="sw-inner">
                          <ul>
                              <li>
                                  <img src="images/aside/6.jpg" alt="" />
                                  <div className="swt-inner">
                                      <span>Bambang Sudibyo</span>
                                      <h4>How to Choose the Best Web Fonts for Your Clients' Websites <a href="#">www.webydo.com/blog/web-desig..</a></h4>
                                      <p>3 Hours ago</p>
                                  </div>
                              </li>
                              <li>
                                  <img src="images/aside/6.jpg" alt="" />
                                  <div className="swt-inner">
                                      <span>Bambang Sudibyo</span>
                                      <h4>Before You Hire Designers <a href="#">http://alistapart.com/article/before...</a> <br />via <a href="#">@alistapart</a></h4>
                                      <p>3 Hours ago</p>
                                  </div>
                              </li>
                              <li>
                                  <img src="images/aside/6.jpg" alt="" />
                                  <div className="swt-inner">
                                      <span>Bambang Sudibyo</span>
                                      <h4>Some cool animated background header effects <a href="#">http://bit.ly/1yojuBX</a> <br />by lovely <a href="#">@rachsmithtweets</a></h4>
                                      <p>3 Hours ago</p>
                                  </div>
                              </li>
                              <li>
                                  <img src="images/aside/6.jpg" alt="" />
                                  <div className="swt-inner">
                                      <span>Bambang Sudibyo</span>
                                      <h4>Off Canvas Menu Effect <a href="#">http://tympanus.net/codrops/2014/09/16/off-canvas-menu-effects/ ...</a></h4>
                                      <p>3 Hours ago</p>
                                  </div>
                              </li>
                          </ul>
                      </div>
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

                  <div className="side-widget sw-poll">
                      <h5><span>Polling Box</span></h5>
                      <div className="sw-inner">
                          <h4>Investigationes demonstrant lectores legere me lius quod legunt saepius ?</h4>
                          <form>
                              <ul>
                                  <li><input type="radio" name="radiog_lite" id="radio1" className="css-checkbox" /><label htmlFor="radio1" className="css-label radGroup1">Lorem ipsum dolor sit amet, consectetuer</label></li>
                                  <li><input type="radio" name="radiog_lite" id="radio2" className="css-checkbox" /><label htmlFor="radio2" className="css-label radGroup1">Sed diam nonummy nibh euismod tincidunt</label></li>
                                  <li><input type="radio" name="radiog_lite" id="radio3" className="css-checkbox" /><label htmlFor="radio3" className="css-label radGroup1">Ullamcorper suscipit lobortis</label></li>
                                  <li><input type="radio" name="radiog_lite" id="radio4" className="css-checkbox" /><label htmlFor="radio4" className="css-label radGroup1">Claritas est etiam processus dynamicus</label></li>
                              </ul>
                          </form>
                          <div className="dual-btns">
                              <a href="#">Vote</a>
                              <a href="#">View Result</a>
                          </div>
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

                  <div className="side-widget sw-subscribe">
                      <h5><span>Subscribe</span></h5>
                      <div className="sw-inner">
                          <div className="sws-inner">
                              <img src="images/aside/8.jpg" alt="" />
                              <p>Make sure you don't miss interesting happenings by joining our newsletter program.<br />We don't do spam.</p>
                          </div>
                          <div id="newsletter">
                              <form className="newsletter">
                                  <input type="email" placeholder="Enter Your Email Address" />
                              </form>
                          </div>
                      </div>
                  </div>
              </aside>
              
          </div>
    </>
  )
}
