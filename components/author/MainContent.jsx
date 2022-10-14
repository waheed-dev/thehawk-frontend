import React from 'react'
import AuthorInfo from './AuthorInfo'
import PostedByAuthor from './PostedByAuthor'

export default function MainContent({ postData, author }) {

  return (
    <>
          <div class="col-md-8 blog-single">
              <div class="bs-meta">
                  <span class="bs-cat">
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
