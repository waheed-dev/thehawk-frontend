
import React from 'react'

import db from 'DB/Conn';
import Post from 'Model/postModel';
export default function index({ posts }) {
  return (
      <>
          
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




        return {
            props: {
                posts: data.map(db.convertDocToObj),

            },
            revalidate: 120,
        };
    } catch (error) {
        console.log(error.message);
        return {
            props: {
                posts: [],

            },
            revalidate: 120,
        };
    }

}