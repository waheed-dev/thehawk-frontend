import React from 'react'
import AuthorInfo from './AuthorInfo'
import PostedByAuthor from './PostedByAuthor'

export default function MainContent({ postData, author }) {

  return (
    <>
          <div className="col-md-8 blog-single">
              <div className="bs-meta">
                  <span className="bs-cat">
                      {
                          author?.isAdmin===true? 'Admin':'Author' 
                      }
                  </span>
              </div>
              {
                  author ? <AuthorInfo author={author} />:''
              }
             

              <PostedByAuthor author={author} postData={postData} />

          </div>
    </>
  )
}
