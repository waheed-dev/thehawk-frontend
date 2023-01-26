import endpoints from '@/config/endpoints'
import url from '@/config/url'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import slugify from 'slugify'


export default function GalleryIndex() {
  const [posts, setposts] = useState([])
  const loadGalleryIndexPost = async () => {
    try {

      const { data } = await axios.get(endpoints.post.galleryIndex)
      
      setposts(data.post)
    } catch (error) {

    }
  }
  useEffect(() => {
    loadGalleryIndexPost()
  }, [])

  return (
    <>
          <div className="col-md-4 footer-widget f-gallery">
              <h5>Gallery Index</h5>
        <ul>
          {
            posts?.map((post) => (
              <>
                <li>
                  <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>

                    <a ><img loading='lazy' src={post.img} className="img-responsive" alt={post.imgAlt} /></a>
                  </Link>
                </li>
              </>
            ))
          }
          
                
                  
              </ul>
          </div>
    </>
  )
}
