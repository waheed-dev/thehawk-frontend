import React from 'react'

export default function CommonNewsFetauredSection({ post, categoryDetail }) {
  return (
    <>
      
          <div className="col-md-6">
              <div className="bl-featured-big">
                  <div className="bl-meta">
                      {/* <span><i className="fa fa-comments-o"></i> 4 Comments</span><br />
                      <span><i className="fa fa-heart-o"></i> 23 Likes</span> */}
                  </div>
                  <img src={post.img} className="img-responsive" alt={post.imgAlt} />
                  <div className="bl-info">
                      <span>{categoryDetail.category}</span>
                      <h3><a href="#">{ post.postitle} </a></h3>
                      <a className="rmore" href="#">Continue Reading <i className="fa fa-arrow-right"></i></a>
                  </div>
              </div>
          </div>
    </>
  )
}
