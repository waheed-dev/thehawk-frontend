import Link from 'next/link'
import React from 'react'
import CommonSectionFetearuedPost from './CommonSectionFetearuedPost'

/* eslint-disable react/no-unescaped-entities */
import url from '@/config/url'
import slugify from 'slugify'
import moment from 'moment'
export default function CommonCategoryNews({ posts, categoryDetail, subCategory }) {
  const length = 154
  return (
    <>
      <div className="row">
        <div className="col-md-12">


          <>
            
            <div className="cat-blocks">
              <h3><span>
                <Link href={
                  url.category
                    .single.replace(':name', slugify(categoryDetail.category))
                    .replace(':id', categoryDetail._id)

                }>
                  <a style={{
                    color: "#fff"
                  }}>
                    {categoryDetail.category}
                </a>
                </Link>
             
              </span></h3>
              <div className="row cat-blocks-tow-part-container">
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
                          {
                            subCategory.filter((subCat) => subCat._id === post.subCategory.id).length > 0 ? <>
                              <span className="cat">
                                <Link href={url.subCategory.single.replace(':name', slugify(subCategory.filter((subCat) => subCat._id === post.subCategory.id)[0]?.subCategoryName)).replace(':id', subCategory.filter((subCat) => subCat._id === post.subCategory.id)[0]?._id)}>
                                  <a style={{
                                    color: "#fff"
                                  }}>
                                    {subCategory.filter((subCat) => subCat._id === post.subCategory.id)[0]?.subCategoryName}
                                  </a>
                                </Link>


                              </span> </> : ''
                          }
                       
                          <h2>
                            <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>
                              <a >
                                {post.postitle}
                              </a>
                            </Link>
                           
                          </h2>
                          <span className="date">{moment(post.createdAt).format("MMMM")} {moment(post.createdAt).format("D")}, {moment(post.createdAt).format("Y")}</span>
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
                            <li>
                              <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>
                                <a >
                                  {post.postitle}
                                </a>
                              </Link>

                              
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
