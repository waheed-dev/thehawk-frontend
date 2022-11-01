import endpoints from '@/config/endpoints'
import axios from 'axios'
import Link from 'next/link'
import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import SidebarAds from './SidebarAds'
import url from '@/config/url'
import slugify from 'slugify'
export default function InnerSidebar({ id, hasMore }) {
    const [page, setpage] = useState(1)
    const [posts, setposts] = useState([])

    const loadPost=  useCallback(
        async () => {
            try {


                const { data } = await axios.get(`${endpoints.category.sidebarPost.replace(':id', id)}/?page=${page}&limit=33`)
                setposts(data.posts)
            } catch (error) {

            }
        },
      [],
    )
    
    const handelChangeAds =() => {
      const AvailableAdds = document.getElementsByClassName("adsbygoogle");
        let valueAddsNumber = 0;

        for (var index = 0; index < AvailableAdds.length; index++) {
            const element = AvailableAdds[index];

            if (element.hasChildNodes() === false) {
                valueAddsNumber = valueAddsNumber + 1;
            }
        }

        for (var i = 0; i < valueAddsNumber; i++) {
            try {
                // @ts-ignore
                (window.adsbygoogle = window.adsbygoogle || []).push({
                    google_ad_client: "ca-pub-9084918379047887",
                });
            } catch (e) {
                console.error(e);
            }
        }
    }
    

    useEffect(() => {
        loadPost()
    }, [loadPost])
    const loadRelatedPost = async () => {

        const data = await axios.get(`${endpoints.category.sidebarPost.replace(':id', id)}/?page=${page}&limit=33`);
        if (data.status === 200) {


            setpage(page + 1);


            setposts([...posts, ...data.data.posts]);

        }
        handelChangeAds()
    };
    return (
        <>
            <aside class="col-md-4">

                <div class="side-widget p-news">
                    <h5><span style={{
                        background: 'unset'
                    }}></span></h5>
                    <div class="sw-inner">
                        <ul>
                            {
                                posts?.map((post , index) => (
                                    <>
                                        <li>
                                            <img src={post.img.replace('/upload/' , '/upload/w_110,h_81/')} alt={post.imgAlt} />
                                            <div class="pn-info">
                                                <span>{post.subCategory.name }</span>
                                                <h4>
                                                    <Link href={url.post.single.replace(':title', slugify(post.postitle)).replace(':id', post._id)}>
                                                    
                                                    <a>Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a>
                                                    </Link>
                                                </h4>
                                            </div>
                                        </li>
                                        {
                                            index % 5 === 0 ? <SidebarAds /> : null
                                        }
                                    </>
                                ))
                            }
                           

                        </ul>
                    </div>
                </div>






            </aside>
            <InfiniteScroll
                scrollThreshold={0.5}
                dataLength={posts?.length ? posts?.length:0} //This is important field to render the next data
                next={loadRelatedPost}
                hasMore={hasMore}
                loader={''}
            ></InfiniteScroll>
        </>
    )
}
