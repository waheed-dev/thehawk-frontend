import url from '@/config/url'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'
import webp from 'utils/webp'

export default function RelatedPost({
    relatedNews
}) {
    const charecterLength = 52
    return (
        <>
            <div className="related-posts">
                <h5>Related Post</h5>
                <ul>
                    {
                        relatedNews?.map((post) => (
                            <>
                                <li>
                                    <div className="col-md-3">
                                        <div className="rp-date">
                                            <span>{moment(post.createdAt).format("MMMM")}</span>
                                            {moment(post.createdAt).format("D")}
                                            <span><em>/</em> {moment(post.createdAt).format("Y")}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <img loading='lazy' src={postData} className="img-responsive" alt={post.imgAlt} />
                                        <div className="rp-inner">
                                            <h4>
                                                <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>

                                                    <a >
                                                        {
                                                            post.postitle.length > charecterLength ? <>
                                                                {
                                                                    post.postitle
                                                                        .substr(0, charecterLength)
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
                                                <a className="rp-more">Read more  <em>&#8594;</em></a>
                                            </Link>

                                        </div>
                                    </div>
                                </li>
                            </>
                        ))
                    }



                </ul>
            </div>
        </>
    )
}
