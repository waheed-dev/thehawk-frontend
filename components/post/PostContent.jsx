import React from 'react'
import RelatedPost from './RelatedPost'

export default function PostContent({ postData, postCategory, postAuthor, relatedNews }) {

  return (
    <>
          <div class="col-md-8 blog-single">
              <div class="bs-meta">
                  <span class="bs-cat">{postCategory.category }</span>
                  {/* <span class="bs-comments"><a href="#"><i class="fa fa-comments-o"></i> 4 Comments</a> <em></em> <a href="#"><i class="fa fa-heart-o"></i> 23 Likes</a></span> */}
              </div>
              <h3>
                  {postData.postitle}  
              </h3>
              <div class="row">
                  <div class="col-md-3 bs-aside">
                      {
                          postAuthor ? <>
                              <img src={postAuthor.avatar ? postAuthor.avatar : 'https://res.cloudinary.com/thehawk/image/upload/w_79,h_79/v1647778416/etg05xddcvjn1hacsuyz.jpg' } alt="" />
                              <h6>{postAuthor.professionalName }</h6>

                          
                          </> : null
                      }
                  
                      <div class="sep1"></div>
                      <div class="space10"></div>
                      <div class="rp-date">
                          <span>November</span>
                          04
                          <span><em>/</em> 2014</span>
                      </div>
                      <div class="space30"></div>
                      <div class="sep1"></div>
                      <div class="space20"></div>
                      <em class="share-count">10K SHARE</em>
                      <span class="bsa-social">
                          <a href="#"><i class="fa fa-facebook"></i></a>
                          <a href="#"><i class="fa fa-twitter"></i></a>
                          <a href="#"><i class="fa fa-plus"></i></a>
                      </span>
                  </div>

                  <div class="col-md-9">
                      <p>
                          {postData.subHeading}
                      </p>
                      <div class="img-w-caption">
                          <img src={postData.img.replace('/upload/' , '/upload/w_570,h_380/')} alt={postData.imgAlt}  class="img-responsive"  />
                         
                      </div>
                      <div dangerouslySetInnerHTML={{
                          __html: postData.description,
                      }} className="postContent">
                          
                      </div>
                      <div class="bs-tags">
                          <span>Categories : <a href="#">
                              {postCategory.category}
                          </a></span>
                          <span>Tags :
                              {
                                  postData.tags.split(',')?.map((tag) => (
                                      <>
                                          <a href="#">{tag},</a>
                                      </>
                              
                                  ))
                              }
                            
                          
                          </span>
                      </div>

                      {/* <div class="bg-share">
                          <div class="row">
                              <div class="col-md-8">
                                  <span>Share this post</span>
                              </div>
                              <div class="col-md-4">
                                  <a href="#"><i class="fa fa-heart"></i> Like this post</a>
                              </div>
                          </div>
                      </div> */}

                
                      {/* <div class="author-info">
                          <img src="images/xtra/2.png" alt="" />
                          <div class="ai-info">
                              <h6>John Smith</h6>
                              <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consue tudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus</p>
                          </div>
                      </div> */}
                  </div>
              </div>

              <RelatedPost relatedNews={relatedNews} />

           
          </div>
    </>
  )
}
