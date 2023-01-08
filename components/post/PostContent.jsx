import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import RelatedPost from './RelatedPost'
import url from '@/config/url'
// social
import slugify from 'slugify'
import webp from 'utils/webp'
import social from 'utils/urlForSocial'
import { FaWhatsapp } from "react-icons/fa";
import {

    FacebookShareButton,

    TwitterShareButton,

    WhatsappShareButton,

} from "react-share";
export default function PostContent({ postData, postCategory, postAuthor, relatedNews }) {

    return (
        <>
            <div class="col-md-8 blog-single">
                <div class="bs-meta">
                    <span class="bs-cat">{postCategory.category}</span>

                </div>
                <h1>
                    {postData.postitle}
                </h1>
                <div class="row">
                    <div class="col-md-3 bs-aside">
                        {
                            postAuthor ? <>
                                <img loading='lazy' src={postAuthor.avatar ? webp(postAuthor.avatar) : 'https://res.cloudinary.com/thehawk/image/upload/w_79,h_79/v1647778416/etg05xddcvjn1hacsuyz.webp'} alt="" />
                                <h6>{postAuthor.professionalName}</h6>


                            </> : null
                        }

                        <div class="sep1"></div>
                        <div class="space10"></div>
                        <div class="rp-date">
                            <span>{moment(postData.createdAt).format("MMMM")}</span>
                            {moment(postData.createdAt).format("D")}
                            <span><em>/</em> {moment(postData.createdAt).format("Y")}</span>
                        </div>
                        <div class="space30"></div>
                        <div class="sep1"></div>
                        <div class="space20"></div>

                        <span class="bsa-social">
                            {/* <a href="#"><i class="fa fa-facebook"></i></a> */}
                            <FacebookShareButton url={social(url.post.single.replace(':title', slugify(postData.postitle)).replace(':id', postData._id))} style={{
                                verticalAlign: 'middle',
                                padding: '10px  16px',
                                backgroundColor: '#3b5998',
                                color: "white"
                            }}><i className="fa fa-facebook"></i></FacebookShareButton>
                            <TwitterShareButton url={social(url.post.single.replace(':title', slugify(postData.postitle)).replace(':id', postData._id))} style={{
                                verticalAlign: 'middle',
                                padding: '10px  16px',
                                backgroundColor: '#00acee',
                                color: "white"
                            }}>
                                <i class="fa fa-twitter"></i>
                            </TwitterShareButton>
                            <WhatsappShareButton url={social(url.post.single.replace(':title', slugify(postData.postitle)).replace(':id', postData._id))} style={{
                                verticalAlign: 'middle',
                                padding: '7px  15px',
                                backgroundColor: '#128c7e',
                                color: "white"
                            }}>
                                <FaWhatsapp style={{
                                    height: 20,
                                    width: 20
                                }}/>
                            </WhatsappShareButton>
                           
                        </span>
                    </div>

                    <div class="col-md-9">
                        <p>
                            {postData.subHeading}
                        </p>
                        <div class="img-w-caption">
                            <img loading='lazy' src={webp(postData.img.replace('/upload/', '/upload/w_570,h_380/'))} alt={postData.imgAlt} class="img-responsive" />

                        </div>
                        <div dangerouslySetInnerHTML={{
                            __html: postData.description,
                        }} className="postContent">

                        </div>
                        <div class="bs-tags">
                            <span>Categories :
                                <Link href={url.category.single.replace(':name', slugify(postCategory.category)).replace(':id', postCategory._id)}>

                                    <a >
                                        {postCategory?.category}
                                    </a>
                                </Link>
                            </span>
                            <span>Tags :
                                {
                                    postData.tags.split(',')?.map((tag) => (
                                        <>
                                            <a >{tag},</a>
                                        </>

                                    ))
                                }


                            </span>
                        </div>


                    </div>
                </div>

                <RelatedPost relatedNews={relatedNews} />


            </div>
        </>
    )
}
