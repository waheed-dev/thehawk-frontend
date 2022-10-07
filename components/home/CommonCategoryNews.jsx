import React from 'react'
import CommonSectionFetearuedPost from './CommonSectionFetearuedPost'
/* eslint-disable react/no-unescaped-entities */
export default function CommonCategoryNews({ posts, categoryDetail, subCategory }) {
  const length = 154
  return (
    <>
      <div className="row">
        <div className="col-md-12">


          <>
            
            <div className="cat-blocks">
              <h4><span>{categoryDetail.category}</span></h4>
              <div className="row">
                {
                  posts
                    .filter((filtered) => filtered.isFetaured === true)
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
                  {
                    posts
                      .filter((filtered) => filtered.isFetaured === false)
                      .filter((subCat) => subCat.subCategory.id !== '')

                      .sort(
                        (a, b) =>
                          new Date(b.createdAt).getTime() -
                          new Date(a.createdAt).getTime()
                      )
                      .slice(0, 1)
                      .map((post) => (
                        <>
                          <span className="cat">{subCategory.filter((subCat) => subCat._id === post.subCategory.id)[0]?.subCategoryName}</span>
                          <h5><a href="./single_post.html">
                            {post.postitle}
                          </a></h5>
                          <span className="date">Posted on November 02, 2014</span>
                          <p>
                            {
                              post.postText.length > length ?
                                post.postText
                                  .substr(0, length)
                                  .substr(
                                    0,
                                    Math.min(
                                      post.postText.length,
                                      post.postText.lastIndexOf(' ')
                                    )
                                  ) + ' ...'
                                : post.postText}
                          </p>
                        </>
                      ))
                  }



                  <ul>
                    {
                      posts
                        .filter((filtered) => filtered.isFetaured === false)


                        .sort(
                          (a, b) =>
                            new Date(b.createdAt).getTime() -
                            new Date(a.createdAt).getTime()
                        )
                        .slice(1,

                          posts
                            .filter((filtered) => filtered.isFetaured === false)
                            .filter((subCat) => subCat.subCategory.id !== '').length === 0 ? 7 : 4

                        )
                        .map((post) => (
                          <>
                            <li><a href="./single_post.html">
                              {post.postitle}
                            </a>
                            </li>
                          </>
                        ))
                    }



                  </ul>
                </div>

                
              </div>
              <div className="space40"></div>
            </div>
          </>




        </div>
      </div>
    </>
  )
}
