import CategorySideBar from '@/components/category/CategorySideBar'
import MainContent from '@/components/category/MainContent'
import endpoints from '@/config/endpoints'
import Layout from '@/layout/index'
import axios from 'axios'
import db from 'DB/Conn'
import Category from 'Model/categoryJs'
import Post from 'Model/postModel'
import SubCategory from 'Model/subCategory'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
/* eslint-disable react/no-unescaped-entities */
import InfiniteScroll from 'react-infinite-scroll-component';
import slugify from 'slugify';
export default function CategoryPage({
  category, thisPageSubCategory, thisPagePost
}) {
  const [thisPagePosts, setthisPagePosts] = useState(thisPagePost);
  const router = useRouter();
  const { id } = router.query;
  let [hasMore, sethasMore] = useState(true);
  const [pageNumber, setpageNumber] = useState(2)
  const loadRelatedPost = async () => {
    // sethasMore(true);
    const data = await axios.get(`${endpoints.post.getPostByCategory.replace(':id', id)}/?page=${pageNumber}`);
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
      <Layout>
        <div class="main-content container">

          <MainContent category={category} thisPageSubCategory={thisPageSubCategory} thisPagePosts={thisPagePosts} />

<CategorySideBar/>
        </div>
      </Layout>
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

  const data = await Post.find({ 'category.id': id })
    .sort({
      $natural: -1,
    })

    .limit(20)

    .lean();
  const thisPageCategory = await Category.find({ _id: id }).lean();

  const thisPageSubCategory = await SubCategory.find({ categoryId: id }).lean();

  return {
    props: {

      category: thisPageCategory.map(db.convertDocToObj),
      thisPageSubCategory: thisPageSubCategory.map(db.convertDocToObj),

      thisPagePost: data.map(db.convertDocToObj),
    }, 
    revalidate: 200,
  };
}