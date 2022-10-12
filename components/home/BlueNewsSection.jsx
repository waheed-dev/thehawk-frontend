/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function BlueNewsSection({ categoryDetails, post }) {
  return (
    <>
          <div className="cat-blocks">
              <h4><span>{categoryDetails.category }</span></h4>
              <div className="row">
                  <div className="col-md-6">
                      <div className="op-twitter">
                          <div className="opt-inner">
                              <h2 className='title-india'>
                                  {post.postitle}
                                 
                              </h2>
                              <p className='mt-3' >
                                  {post.postText}</p>
                            
                          </div>
                        
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="op-info">
                          <div className="opi-inner">
                              <img src={post.img} className="img-responsive" alt={post.imgAlt} />
                          </div>
                        
                      </div>
                  </div>
              </div>
              <div className="space40"></div>
          </div>
    </>
  )
}
