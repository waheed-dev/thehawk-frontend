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
            <div className="col-md-8 blog-single">
                <div className="bs-meta">
                    <span className="bs-cat">{postCategory.category}</span>

                </div>
                <h1>
                    {postData.postitle}
                </h1>
                <div className="row">
                    <div className="col-md-3 bs-aside">
                        {
                            postAuthor ? <>
                                <img loading='lazy' src={postAuthor.avatar ? webp(postAuthor.avatar) : 'https://res.cloudinary.com/thehawk/image/upload/w_79,h_79/v1647778416/etg05xddcvjn1hacsuyz.webp'} alt="" />
                                <h6>{postAuthor.professionalName}</h6>


                            </> : null
                        }

                        <div className="sep1"></div>
                        <div className="space10"></div>
                        <div className="rp-date">
                            <span>{moment(postData.createdAt).format("MMMM")}</span>
                            {moment(postData.createdAt).format("D")}
                            <span><em>/</em> {moment(postData.createdAt).format("Y")}</span>
                        </div>
                        <div className="space30"></div>
                        <div className="sep1"></div>
                        <div className="space20"></div>

                        <span className="bsa-social">
                            {/* <a href="#"><i className="fa fa-facebook"></i></a> */}
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
                                <i className="fa fa-twitter"></i>
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
                                }} />
                            </WhatsappShareButton>

                        </span>
                    </div>

                    <div className="col-md-9">
                        <p>
                            {postData.subHeading}
                        </p>
                        <div className="img-w-caption">
                            <img loading='lazy' src={webp(postData.img.replace('/upload/', '/upload/w_570,h_380/'))} alt={postData.imgAlt} className="img-responsive" />

                        </div>
                        <div dangerouslySetInnerHTML={{
                            __html: postData.description,
                        }} className="postContent">

                        </div>
                        <div className="bs-tags">
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
                                            <Link href={url.tag.replace(':keyword', slugify(tag))}>
                                                <a >{tag}</a>
                                            </Link>

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
