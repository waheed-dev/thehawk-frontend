import MainContent from '@/components/search/MainContent'
import Layout from '@/layout/index'
import React from 'react'

export default function SearchPage() {
  return (
    <>
          <Layout>
             <MainContent/>

              <div class="big-banner">
                  <a href="#"><img src="images/banner/3.jpg" class="img-responsive" alt="" /></a>
              </div> 
      </Layout>
    </>
  )
}
