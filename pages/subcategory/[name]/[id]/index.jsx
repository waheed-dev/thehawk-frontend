import Seo from '@/components/common/Seo';
import MainContent from '@/components/subCategory/MainContent'
import SubCategorySidebar from '@/components/subCategory/SubCategorySidebar'
import endpoints from '@/config/endpoints';
import Layout from '@/layout/index'
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

          <SubCategorySidebar />
        </div>

      <InfiniteScroll
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