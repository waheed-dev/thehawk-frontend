import Link from 'next/link'
import React from 'react'
import url from '@/config/url'
import slugify from 'slugify'
export default function VideoSection({ categoryDetail, posts, subCategory }) {
    return (
        <>
            <div className="side-widget sw-video">
                <h5><span>{categoryDetail.category}</span></h5>
                <div className="sw-inner">
                    <ul>
                        {
                            posts
                                .filter((filtered) => filtered.isFetaured === true)
                                .map((post) => (
                                    <>
                                        <li>
                                            <div className="swv-thumb">
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: post.video,
                                                    }}
                                                ></div>

                                            </div>


                                            {
                                                subCategory.filter((filtered) => filtered._id === post.subCategory.id).map((subCat) => (
                                                    <>
                                                        <span>
                                                            <Link href={url.subCategory.single.replace(':name', slugify(subCat.subCategoryName)).replace(':id', subCat._id )}>
                                                                <a style={{
                                                                color:"#fff"
                                                                }}>
                                                                    {subCat.subCategoryName}
                                                            </a>
                                                            </Link>
                                                          
                                                        </span>
                                                    </>
                                                ))
                                            }

                                            <h4>
                                                <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>

                                                <a >{post.postitle}</a>
                                                </Link>
                                            </h4>
                                        </li>
                                    </>
                                ))
                        }
                        {
                            posts
                                .filter((filtered) => filtered.isFetaured === false)
                                .map((post) => (
                                    <>
                                        <li>
                                            <i className="fa fa-video-camera"></i>
                                            <span>{post.postitle.length > 50 ? <>
                                                {
                                                    post.postitle
                                                        .substr(0, 50)
                                                        .substr(
                                                            0,
                                                            Math.min(
                                                                post.postitle.length,
                                                                post.postitle.lastIndexOf(' ')
                                                            )
                                                        ) + ' ...'
                                                }
                                            </> : <>
                                                {post.postitle}
                                            </>}</span>
                                            <h4>
                                                <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>

                                                <a >{post.postitle.length > 50 ? <>
                                                {
                                                    post.postText
                                                        .substr(0, 60)
                                                        .substr(
                                                            0,
                                                            Math.min(
                                                                post.postText.length,
                                                                post.postText.lastIndexOf(' ')
                                                            )
                                                        ) + ' ...'
                                                }
                                            </> : <>
                                                        {post.postText}
                                                </>}</a>
                                                </Link>
                                            </h4>
                                        </li>
                                    </>
                                ))
                        }



                    </ul>
                </div>

            </div>
        </>
    )
}
