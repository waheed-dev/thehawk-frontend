import React from 'react'
import CommonSectionFetearuedPost from './CommonSectionFetearuedPost'
/* eslint-disable react/no-unescaped-entities */
export default function CommonCategoryNews({ posts, category }) {
  
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          {
            category &&
            category
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
              )
              .filter((filtered) => filtered.addToComminSection === true)
              .slice(0, (category.filter((filtered) => filtered.addToComminSection === true)).length /2)
              .map((categoryDetail) => (
                <>
                  <div className="cat-blocks">
                    <h4><span>{categoryDetail.category}</span></h4>
                    <div className="row">
                      {
                        posts && posts.filter((catFiltered) => catFiltered.category.id === categoryDetail._id)
                          .filter((filtered) => filtered.isFetaured !== true)
                          .sort(
                            (a, b) =>
                              new Date(b.createdAt).getTime() -
                              new Date(a.createdAt).getTime()
                          )
                          .slice(0, 1)
                          .map((fetaurePost) => (
                            <>
                              <CommonSectionFetearuedPost fetaurePost={fetaurePost} />
                            </>
                        ))
                      }


                      <div className="col-md-6 cb-info">
                        <span className="cat">Technology</span>
                        <h5><a href="./single_post.html">Eodem Modo Typi, Qui Nunc Nobis Videntur Parum Clari</a></h5>
                        <span className="date">Posted on November 02, 2014</span>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet doloremagna aliquam erat volutpat. ex ea commodo</p>
                        <ul>
                          <li><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></li>
                          <li><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></li>
                          <li><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="space40"></div>
                  </div>
                </>
            ))
}
        

        </div>
      </div>
    </>
  )
}
