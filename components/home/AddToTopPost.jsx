import url from '@/config/url'
import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'
import TrendingNews from './TrendingNews'

export default function AddToTopPost({ posts }) {

    return (
        <>
            <div className="col-md-9 block-right">
                {
                    posts &&
                    posts
                        .filter((filtered) => filtered.isFetauredTop === true)

                        .map((post) => (
                            <>

                                <div className="bl-featured-big">
                                    <div className="bl-meta">

                                    </div>

                                    <img src={post.img} loading="lazy" className="img-responsive" alt={post.imgAlt} />
                                    <div className="bl-info">
                                        <span>{post.category.name}</span>
                                        <h3>
                                            <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>

                                                <a >{post.postitle}</a>
                                            </Link>
                                        </h3>
                                        <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>

                                            <a className="rmore" >Continue Reading <i className="fa fa-arrow-right"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        ))
                }





                <TrendingNews posts={posts} />

            </div>
        </>
    )
}
