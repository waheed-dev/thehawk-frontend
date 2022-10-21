import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import url from '@/config/url'
import slugify from 'slugify'
import endpoints from '@/config/endpoints'
export default function MostRecomended() {
  const [posts, setposts] = useState([])
  const loadRecomendedPost = async () => {
    try {
      const { data } = await axios.get(endpoints.post.recomanded)
      setposts(data.post)
    } catch (error) {
      
    }
  }
  useEffect(() => {
    loadRecomendedPost()
  }, [])

  return (
    <>
      <div className="col-md-4 footer-widget p-news">
        <h5>Most Commented</h5>
        <ul>
          {
            posts.map((post) => (
              <>
                <li>
                  <img loading='lazy' src={post.img} alt={post.imgAlt} />
                  <div className="pn-info">
                    <span>{post?.subCategory?.name }</span>
                    <h4>
                      <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id' , post._id)}>
                      
                      <a
                      >
                      {
                        post.postitle
                    }
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
    </>
  )
}
