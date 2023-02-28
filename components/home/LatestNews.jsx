import url from '@/config/url'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'
import webp from 'utils/webp'
import BlaBannerAds from '../common/BlaBannerAds'

export default function LatestNews({ posts }) {
  return (
    <>
      <div className="col-md-3 b1-aside">
        <h5><span>Latest News</span></h5>
        <div className="bla-content">

          {
            posts
              .filter((currentElement) => currentElement.isPopular === false)
              .sort((a, b) => new Date(b.createdAt).getTime() -
              new Date(a.createdAt).getTime())

              .slice(0, 6)
              .map((post) => (
                <>
                  <div className="thumb">
                    <img loading='lazy' src={webp(post.img)} className="img-responsive" alt="post img" />
                    <span className="thumb-cat">{ post.category.name}</span>
                  </div>

                  <p> {moment(post.createdAt).format("MMMM")} {moment(post.createdAt).format("D")}, {moment(post.createdAt).format("Y")}</p>

                  <h4>
                    <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>

                    <a
                    >{post.postitle}</a>
                    </Link>
                  </h4>
                  <div className="sep"></div>
                </>
            ))
          }




         
          
          <a href="#" className="btn1">View All Posts</a>
        </div>
<BlaBannerAds/>
      </div>
    </>
  )
}
