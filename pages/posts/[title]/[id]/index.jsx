import PostContent from '@/components/post/PostContent'
import SinglePostSidebar from '@/components/post/SinglePostSidebar'
import Layout from '@/layout/index'
import React from 'react'

export default function index() {
  return (
    // src = "https://res.cloudinary.com/thehawk/image/upload/w_79,h_79/v1647778416/etg05xddcvjn1hacsuyz.jpg"
    <>
      <Layout>
        
        <div class="main-content container">
      <PostContent/>

           <SinglePostSidebar/>
        </div>
        <div class="big-banner">
          <a href="#"><img src="/images/banner/3.jpg" class="img-responsive" alt="" /></a>
        </div>
      </Layout>
    </>
  )
}
