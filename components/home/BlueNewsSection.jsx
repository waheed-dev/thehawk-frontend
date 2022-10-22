/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'
import url from '@/config/url'
import slugify from 'slugify'
import HorizontalAds from '../common/HorizontalAds'
export default function BlueNewsSection({ categoryDetails, post }) {

  return (
    <>
          <div className="cat-blocks">
              <h4><span>
                  <Link
                 
                      href={url.category
                      .single.replace(':name', slugify(categoryDetails.category))
                      .replace(':id', categoryDetails._id)
                  }
                  >
                   
                      <a style={{
                          color: "#fff"
                      }}>
                          {categoryDetails.category}    
                  </a>
                  </Link>
                </span></h4>
              <div className="row">
                  <div className="col-md-6">
                      <div className="op-twitter">
                          <div className="opt-inner">
                              <h2 className='title-india'>
                                  <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id' , post._id)}>
                                      <a style={{
                                          color: "#fff"
                                      }}>
                                          {post.postitle}
                                      </a>
                                  </Link>
                              
                               
                                 
                              </h2>
                              <p className='mt-3' >
                                
                                  <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>
                                      <a style={{
                                          color: "#fff"
                                      }}>
                                          {post.postText}
                                      </a>
                                  </Link>
                              </p>
                            
                          </div>
                        
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="op-info">
                          <div className="opi-inner">
                              <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>
                                  <a >
                                      <img src={post.img} loading="lazy" className="img-responsive" alt={post.imgAlt} />
                                  </a></Link>
                            
                          </div>
                        
                      </div>
                  </div>
                  <HorizontalAds />
              </div>
              <div className="space40"></div>
          </div>
    </>
  )
}
