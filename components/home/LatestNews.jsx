import url from '@/config/url'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'

export default function LatestNews({ posts }) {
  return (
    <>
      <div className="col-md-3 b1-aside">
        <h5><span>Latest News</span></h5>
        <div className="bla-content">

          {
            posts.sort((a, b) => new Date(b.createdAt).getTime() -
              new Date(a.createdAt).getTime())
              .slice(0, 4)
              .map((post) => (
                <>
                  <div className="thumb">
                    <img loading='lazy' src={post.img} className="img-responsive" alt="" />
                    <span className="thumb-cat">{ post.category.name}</span>
                  </div>

                  <p>Posted on {moment(post.createdAt).format("MMMM")} {moment(post.createdAt).format("D")}, {moment(post.createdAt).format("Y")}</p>

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
        <div className="bla-content banner">
          <img  src="images/banner/1.jpg" className="img-responsive" alt="" />
        </div>
      </div>
    </>
  )
}
