import url from '@/config/url'
import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import slugify from 'slugify'
import webp from 'utils/webp'

export default function SearchResult({ postData }) {
    const router = useRouter()

    return (
        <>
            <div className="search-results row">
                <div className="col-md-12">
                    <h3>Search result for : <span>{router.query.q.replaceAll('-', ' ')}</span></h3>
                </div>
                {
                    postData.slice(0, 1)
                        .map((post) => (
                            <>
                                <div className="col-md-12">
                                    <div className="fn2-inner">
                                        <div className="fn2-thumb">
                                            <img loading='lazy' src={webp(post.img)} className="img-responsive" alt={post.imgAlt} />
                                        </div>
                                        <div className="fn2-info">
                                            <div className="fn2-meta">{post.category.name}</div>
                                            <h4>
                                                <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>
                                                    <a >{post.postitle}</a>
                                                </Link>

                                            </h4>
                                            <em> {moment(post.createdAt).format("MMMM")}
                                                {moment(post.createdAt).format("D")}, {moment(post.createdAt).format("Y")}</em>
                                            <p>
                                                {post.postText}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                }

                {
                    postData.slice(1, postData.length)
                        .map((post) => (
                            <>
                                <div className="col-md-12">
                                    <div className="fn2-inner fn2-inner-sub">
                                        <div className="fn2-info">
                                            <div className="fn2-meta">
                                                {post.category.name}
                                            </div>
                                            <h4>
                                                <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>
                                                    <a >
                                                        {
                                                            post.postitle
                                                        }
                                                    </a>
                                                </Link>


                                            </h4>
                                            <em> {moment(post.createdAt).format("MMMM")}
                                                {moment(post.createdAt).format("D")}, {moment(post.createdAt).format("Y")}</em>
                                            <p>
                                                {
                                                    post.postText
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                }





            </div>
        </>
    )
}
