import React from 'react'

export default function PopularNews({posts}) {
  return (
    <>
      <div className="side-widget p-news">
        <h5><span>Popular news</span></h5>
        <div className="sw-inner">
          <ul>
            {
              posts.sort((a, b) => new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime())
                .filter((currentElement) => currentElement.isPopular === true)
                .slice(0, 5)
                .map((post) => (
                  <>
                    <li>
                      <img src={post.img} alt={post.imgAlt} />
                      <div className="pn-info">
                        <span>{ post.category.name}</span>
                        <h4><a href="./single_post.html">{post.postitle }</a></h4>
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
