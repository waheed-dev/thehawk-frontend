import url from '@/config/url'
import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'
import webp from 'utils/webp'

export default function PlainNewsFetauredSection({ post, categoryDetail }) {
  return (
    <>
      
          <div className="col-md-6">
              <div className="bl-featured-big">
                  <div className="bl-meta">
                     
                  </div>
          <img src={webp(post.img.replace('/upload/', '/upload/w_570,h_410/'))} className="img-responsive" alt={post.imgAlt} />
                  <div className="bl-info">
            <span>
              <Link href={url.category.single.replace(':name', slugify(categoryDetail.category)).replace(':id', categoryDetail._id)}>

                <a style={{
                  color: '#fff'
                }}>
                  {categoryDetail.category}
                </a>
              </Link>
             
            </span>
            <h3>
              <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>
                <a >{post.postitle} </a>
              </Link>

            </h3>
            <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>

                      <a className="rmore" >Continue Reading <i className="fa fa-arrow-right"></i></a>
            </Link>
                  </div>
              </div>
          </div>
    </>
  )
}
