import Link from 'next/link'
import React from 'react'
import url from '@/config/url'
import slugify from 'slugify'
import moment from 'moment'
import webp from 'utils/webp'
export default function TrendingNews({ posts }) {
    const maxLength = 168
    return (
        <>
            <div className="featured-news2">
                <h5><span>Trending News</span></h5>
                <div className="row">
                    {
                        posts.sort((a, b) => new Date(b.createdAt).getTime() -
                            new Date(a.createdAt).getTime())
                            .filter((currentElement) => currentElement.isTrending === true)
                            .slice(0, 6)
                            .map((post) => (
                                <>
                                    <div className="col-md-12">
                                        <div className="fn2-inner">
                                            <div className="fn2-thumb">
                                                <img loading='lazy' src={webp(post.img.replace('/upload/', '/upload/w_270,h_210/'))} className="img-responsive" alt={post.imgAlt} />
                                            </div>
                                            <div className="fn2-info">
                                                <div className="fn2-meta">
                                                    <Link href={url.category.single.replace(':name', slugify(post.category.name)).replace(':id', post.category.id)}>

                                                        <a style={{
                                                            color:'#e00000'
                                                        }}>

                                                            {post.category.name}
                                                        </a>
                                                    </Link>

                                                </div>
                                                <h4>
                                                    <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(":id", post._id)}>

                                                        <a >{post.postitle}</a>
                                                    </Link>
                                                </h4>
                                                <em> {moment(post.createdAt).format("MMMM")} {moment(post.createdAt).format("D")}, {moment(post.createdAt).format("Y")}</em>
                                                <p>

                                                    {
                                                        post.postText.length > maxLength ?
                                                            post.postText
                                                                .substr(0, maxLength)
                                                                .substr(
                                                                    0,
                                                                    Math.min(
                                                                        post.postText.length,
                                                                        post.postText.lastIndexOf(' ')
                                                                    )
                                                                ) + ' ...'
                                                            : post.postText}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                    }




                    <div className="clearfix space10"></div>
                </div>
            </div>

        </>
    )
}
