import React from 'react'
import HorizontalAds from '../common/HorizontalAds'
import AddToTopPost from './AddToTopPost'
import BlueNewsSection from './BlueNewsSection'
import CommonCategoryNews from './CommonCategoryNews'
import LatestNews from './LatestNews'
import PopularNews from './PopularNews'
import Sidebar from './Sidebar'
/* eslint-disable react/no-unescaped-entities */


export default function MainContent({ posts, category, subCategory  }) {
  return (
      <>
    



          <div className="main-content container">
            
              <div className="col-md-8 block-1">
                  <div className="row">
                      <AddToTopPost posts={posts} />

                      <LatestNews posts={posts} />
                 
                  </div>
                  {
                      category &&
                      category
                         
                          .filter((filtered) => filtered.addToComminSection === true)
                          .sort(
                              (a, b) =>
                                  new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                          )
                          .slice(0, (category.filter((filtered) => filtered.addToComminSection === true)).length / 2)
                          .map((categoryDetail, index ) => (
                              
                              <>
                                  <CommonCategoryNews categoryDetail={categoryDetail} subCategory={subCategory.filter((curElem) => curElem.categoryId === categoryDetail._id)} posts={posts.filter((catFiltered) => catFiltered.category.id === categoryDetail._id)
                                     } />
                                  {
                                      index % 2 === 0 ? <HorizontalAds /> : null
                                  }
                              </>
                          ))
                  }
                

              </div>

              <Sidebar posts={posts} category={ category} subCategory={subCategory} />
              
          </div>
    </>
  )
}
