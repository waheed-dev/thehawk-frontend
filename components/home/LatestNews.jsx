import React from 'react'

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
                    <img src={post.img} className="img-responsive" alt="" />
                    <span className="thumb-cat">{ post.category.name}</span>
                  </div>

                  <p>Posted on November 02, 2014</p>

                  <h4><a href="./single_post.html">{post.postitle}</a></h4>
                  <div className="sep"></div>
                </>
            ))
          }




         
          
          <a href="#" className="btn1">View All Posts</a>
        </div>
        <div className="bla-content banner">
          <img src="images/banner/1.jpg" className="img-responsive" alt="" />
        </div>
      </div>
    </>
  )
}
