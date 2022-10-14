import url from '@/config/url'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'

export default function PostedByAuthor({ postData, author }) {
    const titleLength = 52
    return (
        <>
            {
                postData.length > 0 ? <>
                    <div class="related-posts related-posts-cat">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h5>{author?.professionalName}'s Posts <span>({postData.length}) <i class="fa fa-angle-down"></i></span></h5>
                        <ul>
                            {
                                postData.map((post) => (
                                    <>
                                        <li>
                                            <div class="col-md-3">
                                                <div class="rp-date">
                                                    <span>{moment(post.createdAt).format("MMMM")}</span>
                                                    {moment(post.createdAt).format("D")}
                                                    <span><em>/</em> {moment(post.createdAt).format("Y")}</span>
                                                </div>
                                            </div>
                                            <div class="col-md-9">
                                                <img loading='lazy' src={post.img.replace('/upload/', '/upload/w_270,h_180/')} class="img-responsive" alt={post.imgAlt} />
                                                <div class="rp-inner">
                                                    <span class="rp-cat">
                                                        <Link href={url.post.single.replace(':name', slugify(post.category.name)).replace(':id', post.category.id)}>
                                                            {post.category.name}
                                                        </Link>
                                                 
                                                    </span>
                                                    <h4>
                                                        <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>
                                                            <a >
                                                                {
                                                                    post.postitle.length > titleLength ?
                                                                        <>
                                                                            {

                                                                                post.postitle
                                                                                    .substr(0, titleLength)
                                                                                    .substr(
                                                                                        0,
                                                                                        Math.min(
                                                                                            post.postitle.length,
                                                                                            post.postitle.lastIndexOf(' ')
                                                                                        )
                                                                                    ) + ' ...'

                                                                            }
                                                                        </> : post.postitle
                                                                }
                                                            </a>
                                                        </Link>
                                                     
                                                    </h4>
                                                    <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>
                                                        <a class="rp-more">
                                                            Read more  <em>&#8594;</em>
                                                        </a>
                                                    </Link>
                                                   
                                                    
                                                </div>
                                            </div>
                                        </li>
                                    </>
                                ))
                            }


                        </ul>
                    </div>
                </> : ''
            }

        </>
    )
}
