import InnerSidebar from '@/components/common/InnerSidebar';
import Seo from '@/components/common/Seo';
import MainContent from '@/components/subCategory/MainContent'

import endpoints from '@/config/endpoints';

import axios from 'axios';
import db from 'DB/Conn';
import Post from 'Model/postModel';
import SubCategory from 'Model/subCategory';
import { useRouter } from 'next/router';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
export default function SubCategoryPage({
  thisPagePost,
  subCategory
}) {

  const [thisPagePosts, setthisPagePosts] = useState(thisPagePost);
  useEffect(() => {

    if (thisPagePost < 20) {
      sethasMore(false);
    }

  }, [thisPagePost]);

  const router = useRouter();
  const { id } = router.query;
  let [hasMore, sethasMore] = useState(true);

  const [pageNumber, setpageNumber] = useState(2);
  const url = `${process.env.NEXT_PUBLIC_DOMAIN}/${router.asPath}` 
  useEffect(() => {
    const handelChangeAds = () => {
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
    };

    router.events.on("routeChangeComplete", handelChangeAds);
    router.events.on("hashChangeComplete", handelChangeAds);
    return () => {
      router.events.off("routeChangeComplete", handelChangeAds);
      router.events.off("hashChangeComplete", handelChangeAds);
    };
  }, [router.events]);
  const loadRelatedPost = async () => {

    const data = await axios.get(`${endpoints.post.getPostBySubCategory.replace(':id', id)}/?page=${pageNumber}`);
    if (data.status === 200) {
      if (data.data.length < 20) {
        sethasMore(() => false);
      }

      setpageNumber(pageNumber + 1);


      setthisPagePosts([...thisPagePosts, ...data.data]);

    }
  };
  return (
    <>
      <Seo
        title={subCategory[0].subCategoryPageTitle}
        description={subCategory[0].subCategoryPageDescription}
        type='article'
        url={url}
      />

        <div class="main-content container">

          <MainContent subCategory={subCategory} thisPagePosts={thisPagePosts}  />

        <InnerSidebar id={subCategory[0]?.categoryId} hasMore={ hasMore} />
        </div>

      <InfiniteScroll
        scrollThreshold={0.5}
        dataLength={thisPagePosts.length} //This is important field to render the next data
        next={loadRelatedPost}
        hasMore={hasMore}
        loader={''}
      ></InfiniteScroll>
    </>
  )
}

export async function getStaticPaths() {

  const paths = [];


  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(context) {
  const { params } = context;

  const { id } = params;
  await db.dbConnect();

  const data = await Post.find({ 'subCategory.id': id })
    .sort({
      $natural: -1,
    })

    .limit(20)

    .lean();

  const thisPageSubCategory = await SubCategory.find({ _id: id }).lean();



  return {
    props: {
      subCategory: thisPageSubCategory.map(db.convertDocToObj),

      thisPagePost: data.map(db.convertDocToObj),
    },
    revalidate: 200,
  };
}