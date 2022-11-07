import url from '@/config/url'
import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'
import webp from 'utils/webp'
import SidebarAds from '../common/SidebarAds'

export default function SideBarCommonNews({ posts }) {
    return (
        <>
            <div className="side-widget p-news">

                <div className="sw-inner">
                    <ul>
                        {
                            posts
                                //   .slice(0 ,7)
                                .map((post, index) => (
                                    <>
                                        <li>
                                            <img loading='lazy' src={webp(post.img.replace('/upload/', '/upload/w_400,h_400/'))} alt={post.imgAlt} />
                                            <div className="pn-info">
                                                <span>      <Link href={url.subCategory.single.replace(':name', slugify(post.subCategory.name)).replace(':id', post.subCategory.id)}>
                                                    <a style={{
                                                        colour: '#fff'
                                                    }}>
                                                        {post.subCategory.name}
                                                    </a>
                                                </Link></span>
                                                <h4>
                                                    <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>

                                                        <a >{post.postitle}</a>
                                                    </Link>
                                                </h4>
                                            </div>
                                        </li>
                                        {/* {
                                        index%5 ===0? <SidebarAds/>:null
                                      } */}
                                    </>
                                ))
                        }

                        <SidebarAds />
                    </ul>

                </div>
            </div>

        </>
    )
}
