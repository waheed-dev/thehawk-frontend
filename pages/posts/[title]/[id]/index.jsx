import HorizontalAds from '@/components/common/HorizontalAds';
import InnerSidebar from '@/components/common/InnerSidebar';
import Seo from '@/components/common/Seo';
import PostContent from '@/components/post/PostContent'
import { NewsArticleJsonLd } from 'next-seo';


import db from 'DB/Conn';
import Category from 'Model/categoryJs';
import Post from 'Model/postModel';
import User from 'Model/userModel';
import { useRouter } from 'next/router';
import React from 'react'
import { useEffect } from 'react';

export default function PostDetailPage({ postData, postCategory, postAuthor, relatedNews }) {

  const router = useRouter();

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
  const url = `${process.env.NEXT_PUBLIC_DOMAIN}/${router.asPath}`

  return (

    <>

      <Seo
        title={postData[0]?.pageTitle}
        description={postData[0]?.pageDescription}
        type='article'
        image={postData[0]?.img}
        url={url}
        imageAlt={postData[0]?.imgAlt}
      />
      <NewsArticleJsonLd
        url="https://example.com/article"
        title={postData[0]?.pageTitle}
        images={[
          postData[0]?.img,

        ]}
        section={postData[0]?.category?.name}
        keywords={postData[0]?.tags}
        datePublished={new Date(postData[0]?.createdAt).toISOString()}
        dateModified={new Date(postData[0]?.updatedAt).toISOString()}
        authorName={postData[0]?.author?.name}
        publisherName={'The hawk'}
        publisherLogo="https://www.example.com/photos/logo.jpg"
        description={postData[0]?.pageDescription}
        body={postData[0]?.descrption}
        isAccessibleForFree={true}
      />

      <div className="main-content container">
        <PostContent relatedNews={relatedNews} postData={postData[0]} postCategory={postCategory[0]} postAuthor={postAuthor[0]} />

        <InnerSidebar id={postData[0]?.category?.id} />
      </div>
      <HorizontalAds />

    </>
  )
}


export async function getStaticPaths() {

  const paths = [];


  return { paths, fallback: 'blocking' };
}
export async function getStaticProps(context) {
  try {
    const { params } = context;

    const { id } = params;

    await db.dbConnect();

    const data = await Post.find({ _id: id }).lean();

    const PostCategory = await Category.find({
      _id: data[0].category.id
    }).lean();
    const PostAuthor = await User.find({
      _id: data[0].author.id
    }).lean();

    const relatedNews = await Post.find({
      'category.id': data[0].category.id,
      _id: { $ne: data[0]._id }
    })
      .sort({
        $natural: -1,
      })
      .limit(10)
      .lean();
    return {
      props: {
        postData: data.map(db.convertDocToObj),
        postCategory: PostCategory.map(db.convertDocToObj),
        postAuthor: PostAuthor.map(db.convertDocToObj),
        relatedNews: relatedNews.map(db.convertDocToObj)
      },
      revalidate: 120,
    };
  } catch (error) {

    return {
      props: {
        postData: [],
        postCategory: [],
        postAuthor: [],
        relatedNews: []
      },
      revalidate: 120,
    };
  }

}