import React from 'react'
import { convert } from 'html-to-text';
import moment from 'moment';
import Link from 'next/link';
import url from '@/config/url';
import slugify from 'slugify';
export default function MainContent({ subCategory, thisPagePosts }) {
    const postLength = 1765
    return (
        <>
            <div class="col-md-8 blog-single">
                <div class="bs-meta">

                    <span class="bs-cat">
                        {
                            subCategory[0].subCategoryName
                        }
                    </span>
                    {/* <span class="bs-comments"><a href="#"><i class="fa fa-comments-o"></i> 4 Comments</a> <em></em> <a href="#"><i class="fa fa-heart-o"></i> 23 Likes</a></span> */}
                </div>
                {
                    thisPagePosts.slice(0, 1)
                        .map((post) => (
                            <>
                                <h3>
                                    {post.postitle}
                                </h3>
                                <img loading='lazy' src={post.img.replace('/upload/', '/upload/w_770,h_500/')} alt={post.imgAlt} class="img-responsive space30" />
                                <div class="row">
                                    <div class="col-md-3 bs-aside">
                                        {/* <img src="images/xtra/2.png" alt="" /> */}
                                        <h6>
                                            {post.author.name}
                                        </h6>
                                        <div class="sep1"></div>
                                        <div class="space10"></div>
                                        <div class="rp-date">
                                            <span>
                                                {moment(post.createdAt).format("MMMM")}
                                            </span>
                                            {moment(post.createdAt).format("D")}
                                            <span><em>/</em> {moment(post.createdAt).format("Y")}</span>

                                        </div>
                                        <div class="space30"></div>
                                        <div class="sep1"></div>
                                        <div class="space20"></div>
                             
                                        <span class="bsa-social">
                                            <a href="#"><i class="fa fa-facebook"></i></a>
                                            <a href="#"><i class="fa fa-twitter"></i></a>
                                            <a href="#"><i class="fa fa-plus"></i></a>
                                        </span>
                                    </div>
                                    <div class="col-md-9">
                                        <p>
                                            {
                                                convert(
                                                    post.description, {
                                                    wordwrap: 130
                                                }
                                                )
                                                    .substr(0, postLength)
                                                    .substr(
                                                        0,
                                                        Math.min(
                                                            convert(
                                                                post.description, {
                                                                wordwrap: 130
                                                            }
                                                            ).length,
                                                            convert(
                                                                post.description, {
                                                                wordwrap: 130
                                                            }
                                                            ).lastIndexOf(' ')
                                                        )
                                                    ) + ' ...'
                                            }
                                        </p>
                                        <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>

                                        <a class="post-more">Continue Reading <em>&#8594;</em></a>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        ))
                }


                <div class="related-posts related-posts-cat">
                    <h5>More about <span>   {
                        subCategory[0].subCategoryName
                    } <i class="fa fa-angle-down"></i></span></h5>
                    <ul>
                        {
                            thisPagePosts.slice(1, thisPagePosts.length)
                                .map((post) => (
                                    <>
                                        <li>
                                            <div class="col-md-3">
                                                <div class="rp-date">
                                                    <span>
                                                        {moment(post.createdAt).format("MMMM")}
                                                    </span>
                                                    {moment(post.createdAt).format("D")}
                                                    <span><em>/</em> {moment(post.createdAt).format("Y")}</span>
                                                </div>
                                            </div>
                                            <div class="col-md-9">
                                                <img loading='lazy' src={post.img.replace('/upload/', '/upload/w_300,h_250/')} class="img-responsive" alt={post.imgAlt} />
                                                <div class="rp-inner">

                                                    {
                                                        post.tags.split(',')
                                                            .slice(0, 2)
                                                            .map((tag) => (
                                                                <>
                                                                    <span class="rp-cat">
                                                                        {tag},
                                                                    </span>
                                                                </>
                                                            ))
                                                    }


                                                    <h4>
                                                        <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>

                                                            <a >
                                                                {post.postitle}
                                                            </a>
                                                        </Link>
                                                    </h4>
                                                    <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>

                                                        <a
                                                            class="rp-more">Read more  <em>&#8594;</em></a>
                                                    </Link>
                                                </div>
                                            </div>
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
