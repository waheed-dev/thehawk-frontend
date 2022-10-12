import React from 'react'
import dynamic from 'next/dynamic'


import { Suspense } from 'react'

const DynamicAuthorSection = dynamic(() => import('./AuthorSection'), {
  suspense: false,
  ssr:false
})
import PopularNews from './PopularNews'
import VideoSection from './VideoSection'
import SideBarCommonNews from './SideBarCommonNews'

export default function Sidebar({posts , category , subCategory}) {
  return (
    <>
          <aside className="col-md-4">

              <PopularNews posts={posts} />

              <div className="side-widget sw-banner">
                  <a href="#"><img src="images/banner/2.jpg" className="img-responsive" alt="" /></a>
              </div>


              {
                  category.filter((filtered) => filtered.isVideoSection === true
                  ) 
                      .map((categoryDetail) => (
                          <>
                          
                              <VideoSection
                                  categoryDetail={categoryDetail}
                                  posts={posts.filter((post) => post.category.id === categoryDetail._id)}

                                  subCategory={subCategory.filter((currentSubCat) => currentSubCat.categoryId === categoryDetail._id)} />
                          </>
                  ))
}
         
        



        <DynamicAuthorSection />
        {
          category &&
          category

            .filter((filtered) => filtered.addToComminSection === true)
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            )
            .slice(0, (category.filter((filtered) => filtered.addToComminSection === true)).length / 2)
            .map((categoryDetail) => (

              <>

                <SideBarCommonNews categoryDetail={categoryDetail}
                  subCategory=
                  {subCategory.filter((curElem) => curElem.categoryId ===
                    categoryDetail._id)} posts={
                      posts.filter((catFiltered) =>
                      catFiltered.category.id === categoryDetail._id)
                      .filter((filtered) => filtered.isFetaured === false)
                      .sort(
                        (a, b) =>
                          new Date(b.createdAt).getTime() -
                          new Date(a.createdAt).getTime()
                      )
                      .slice(posts
                        .filter((filtered) => filtered.isFetaured === false)
                        .filter((subCat) => subCat.subCategory.id !== '').length === 0 ? 7 : 5, 

                        posts.filter((catFiltered) =>
                          catFiltered.category.id === categoryDetail._id).length

                      )
                  
                  } />
                {/* <div className="space40"></div> */}
              </>
            ))
        }




          </aside>
    </>
  )
}
