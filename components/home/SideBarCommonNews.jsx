import React from 'react'

export default function SideBarCommonNews({posts}) {
  return (
    <>
          <div className="side-widget p-news">

              <div className="sw-inner">
                  <ul>
                      {
                          posts
                              .slice(0 ,7)
                              .map((post) => (
                                  <>
                                      <li>
                                          <img src={post.img} alt={post.imgAlt} />
                                          <div className="pn-info">
                                              <span>{post.category.name}</span>
                                              <h4><a href="./single_post.html">{post.postitle}</a></h4>
                                          </div>
                                      </li>
                                  </>
                              ))
                      }


                  </ul>
              </div>
          </div>

    </>
  )
}
