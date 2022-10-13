import PostContent from '@/components/post/PostContent'
import SinglePostSidebar from '@/components/post/SinglePostSidebar'
import Layout from '@/layout/index'
import db from 'DB/Conn';
import Category from 'Model/categoryJs';
import Post from 'Model/postModel';
import User from 'Model/userModel';
import React from 'react'

export default function index({ postData, postCategory, postAuthor, relatedNews }) {

  return (
    // src = "https://res.cloudinary.com/thehawk/image/upload/w_79,h_79/v1647778416/etg05xddcvjn1hacsuyz.jpg"
    <>
      <Layout>
        
        <div class="main-content container">
          <PostContent relatedNews={relatedNews} postData={postData[0]} postCategory={postCategory[0]} postAuthor={postAuthor[0]} />

           <SinglePostSidebar/>
        </div>
        <div class="big-banner">
          <a href="#"><img src="/images/banner/3.jpg" class="img-responsive" alt="" /></a>
        </div>
      </Layout>
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
}