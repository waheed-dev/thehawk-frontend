import React from 'react'

export default function CommonSectionFetearuedPost({ fetaurePost }) {
  return (
    <>
          <div className="col-md-6">
              <div className="cb-big">
                  <div className="bl-meta">
                      {/* <span><i className="fa fa-comments-o"></i> 4 Comments</span><br />
                            <span><i className="fa fa-heart-o"></i> 23 Likes</span> */}
                  </div>
                  <img src={fetaurePost.img} className="img-responsive" alt={fetaurePost.imgAlt} style={{
                      minHeight: "450px"
                  }} />
                  <div className="bl-info">
                      <h3><a href="./single_post.html">{fetaurePost.postitle}</a></h3>
                      <p>Posted on November 02, 2014</p>
                  </div>
              </div>
          </div>
    </>
  )
}
