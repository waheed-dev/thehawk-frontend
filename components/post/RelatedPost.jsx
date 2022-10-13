import React from 'react'

export default function RelatedPost({
    relatedNews
}) {
    const charecterLength = 52
  return (
    <>
          <div class="related-posts">
              <h5>Related Post</h5>
              <ul>
                  {
                      relatedNews?.map((post) => (
                          <>
                              <li>
                                  <div class="col-md-3">
                                      <div class="rp-date">
                                          <span>November</span>
                                          04
                                          <span><em>/</em> 2014</span>
                                      </div>
                                  </div>
                                  <div class="col-md-9">
                                      <img src={post.img.replace('/upload/', '/upload/w_280,h_190/')} class="img-responsive" alt={post.imgAlt} />
                                      <div class="rp-inner">
                                          <h4><a href="./single_post.html">
                                              {
                                                  post.postitle.length > charecterLength ? <>
                                                      {
                                                          post.postitle
                                                              .substr(0, charecterLength)
                                                              .substr(
                                                                  0,
                                                                  Math.min(
                                                                      post.postitle.length,
                                                                      post.postitle.lastIndexOf(' ')
                                                                  )
                                                              ) + ' ...'
                                                  }
                                                  </> : post.postitle
                                          }
                                          </a></h4>
                                          <a href="#" class="rp-more">Read more  <em>&#8594;</em></a>
                                      </div>
                                  </div>
                              </li>
                          </>
                      )) 
                  }
               


              </ul>
          </div>
    </>
  )
}
