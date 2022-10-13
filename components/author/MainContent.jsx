import React from 'react'
import AuthorInfo from './AuthorInfo'
import PostedByAuthor from './PostedByAuthor'

export default function MainContent() {
  return (
    <>
          <div class="col-md-8 blog-single">
              <div class="bs-meta">
                  <span class="bs-cat">Contributor</span>
              </div>
      <AuthorInfo/>

          <PostedByAuthor/>

              <div class="page-nav">
                  <span>Page</span>
                  <ul>
                      <li class="active"><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">...</a></li>
                      <li><a href="#">11</a></li>
                      <li><a href="#">12</a></li>
                      <li><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
                  </ul>
              </div>
          </div>
    </>
  )
}
