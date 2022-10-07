/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function BlueNewsSection({ categoryDetails, post }) {
  return (
    <>
          <div class="cat-blocks">
              <h4><span>{categoryDetails.category }</span></h4>
              <div class="row">
                  <div class="col-md-6">
                      <div class="op-twitter">
                          <div class="opt-inner">
                              <h2 className='title-india'>
                                  {post.postitle}
                                 
                              </h2>
                              <p className='mt-3' >
                                  {post.postText}</p>
                            
                          </div>
                        
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="op-info">
                          <div class="opi-inner">
                              <img src={post.img} className="img-responsive" alt={post.imgAlt} />
                          </div>
                        
                      </div>
                  </div>
              </div>
              <div class="space40"></div>
          </div>
    </>
  )
}
