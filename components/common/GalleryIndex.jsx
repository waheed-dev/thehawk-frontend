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

      const { data } = await axios.get('http://localhost:8000/api/post/galleryIndex')
      
      setposts(data.post)
    } catch (error) {

    }
  }
  useEffect(() => {
    loadGalleryIndexPost()
  }, [])
  console.log(posts);
  return (
    <>
          <div className="col-md-4 footer-widget f-gallery">
              <h5>Gallery Index</h5>
        <ul>
          {
            posts.map((post) => (
              <>
                <li>
                  <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>

                  <a ><img loading='lazy' src={post.img.replace('/upload/' , '/upload/w_100,h_100/')} className="img-responsive" alt={post.imgAlt} /></a>
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
