import MainContent from '@/components/search/MainContent'
import Layout from '@/layout/index'
import db from 'DB/Conn';
import Post from 'Model/postModel';
import React from 'react'

export default function SearchPage({ postData }) {

  return (
    <>

      <MainContent postData={postData} />

      <div className="big-banner">
        <a href="#"><img src="images/banner/3.jpg" className="img-responsive" alt="banner-image" /></a>
      </div>

    </>
  )
}


export async function getStaticPaths() {

  const paths = [];


  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(context) {
  const { params } = context;

  const { q } = params;
  await db.dbConnect();
  const SearchQuery = q.replaceAll('-', ' ')
  const data = await Post.find({
    $or: [{
      postitle: {
        $regex: SearchQuery
      }
    }, {
      postText: {
        $regex: SearchQuery
      }
    },
    {
      subHeading: {
        $regex: SearchQuery
      }
    },
    {
      description: {
        $regex: SearchQuery
      }
    },
    ]
  })
    .sort({
      $natural: -1,
    })
    .limit(25)
    .lean();





  return {
    props: {
      postData: data.map(db.convertDocToObj),

    },
    revalidate: 120,
  };
}