import url from '@/config/url'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'

export default function RelatedPost({
    relatedNews
}) {
    const charecterLength = 52
    return (
        <>
            <div class="related-posts">
                <h5>Related Post</h5>
                <ul>
                    {
                        relatedNews?.map((post) => (
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
                                        <img loading='lazy' src={post.img.replace('/upload/', '/upload/w_280,h_190/')} class="img-responsive" alt={post.imgAlt} />
                                        <div class="rp-inner">
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
                                                <a class="rp-more">Read more  <em>&#8594;</em></a>
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
