import { useRouter } from 'next/router'
import React from 'react'

export default function SearchResult({ postData }) {
    const router = useRouter()

  return (
    <>
          <div class="search-results row">
              <div class="col-md-12">
                  <h3>Search result for : <span>{router.query.q.replaceAll('-', ' ') }</span></h3>
              </div>
              {
                  postData.slice(0, 1)
                      .map((post) => (
                          <>
                              <div class="col-md-12">
                                  <div class="fn2-inner">
                                      <div class="fn2-thumb">
                                          <img src={post.img} class="img-responsive" alt={post.imgAlt} />
                                      </div>
                                      <div class="fn2-info">
                                          <div class="fn2-meta">{post.category.name}</div>
                                          <h4><a href="./single_post.html">{post.postitle }</a></h4>
                                          <em>Posted on November 02, 2014</em>
                                          <p>
                                              {post.postText}
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </>
                  ))
}
         
              {
                  postData.slice(1, postData.length)  
                      .map((post) => (
                          <>
                              <div class="col-md-12">
                                  <div class="fn2-inner fn2-inner-sub">
                                      <div class="fn2-info">
                                          <div class="fn2-meta">
                                              {post.category.name}
                                          </div>
                                          <h4><a href="./single_post.html">
                                              {
                                                  post.postitle
                                          }
                                          </a></h4>
                                          <em>Posted on November 02, 2014</em>
                                          <p>
                                              {
                                                  post.postText
                                              }
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </>
                  ))
}
              
            



          </div>
    </>
  )
}
