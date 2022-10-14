import url from '@/config/url'
import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'

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
                      <img loading='lazy' src={post.img} alt={post.imgAlt} />
                      <div className="pn-info">
                        <span>
                          <Link href={url.category.single.replace(':name', slugify(post.category.name)).replace(':id', post.category.id)}>
                            <a style={{
                              colour:'#fff'
                            }}>
                              {post.category.name}
                            </a>
                          </Link>
                        
                        </span>
                        <h4>
                          <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>
                            <a >
                              {post.postitle}
                            </a>
                          </Link>
                        </h4>
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
