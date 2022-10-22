
import MainContent from '@/components/author/MainContent'

import db from 'DB/Conn';
import Post from 'Model/postModel';
import User from 'Model/userModel';
import React from 'react'

export default function AuthorPage({
    postData, author
}) {
  return (
      <>
       
              <div class="main-content container">
                  <MainContent postData={postData} author={author[0]} />

                  <aside class="col-md-4">

                      <div class="side-widget p-news">
                          <h5><span>Popular news</span></h5>
                          <div class="sw-inner">
                              <ul>
                                  <li>
                                      <img src="images/aside/1.jpg" alt="" />
                                      <div class="pn-info">
                                          <span>Politic</span>
                                          <h4><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></h4>
                                      </div>
                                  </li>
                                  <li>
                                      <img src="images/aside/2.jpg" alt="" />
                                      <div class="pn-info">
                                          <span>Politic</span>
                                          <h4><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></h4>
                                      </div>
                                  </li>
                                  <li>
                                      <img src="images/aside/3.jpg" alt="" />
                                      <div class="pn-info">
                                          <span>Business</span>
                                          <h4><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></h4>
                                      </div>
                                  </li>
                                  <li>
                                      <img src="images/aside/4.jpg" alt="" />
                                      <div class="pn-info">
                                          <span>Technology</span>
                                          <h4><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></h4>
                                      </div>
                                  </li>
                                  <li>
                                      <img src="images/aside/5.jpg" alt="" />
                                      <div class="pn-info">
                                          <span>Uncategorized</span>
                                          <h4><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></h4>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>

                      <div class="side-widget sw-banner">
                          <a href="#"><img src="images/banner/2.jpg" class="img-responsive" alt="" /></a>
                      </div>










                  </aside>
              </div>

              <div class="big-banner">
                  <a href="#"><img src="images/banner/3.jpg" class="img-responsive" alt="" /></a>
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

    const { id } = params;
    await db.dbConnect();
    const Author = await User.find({
        _id: id
    }).lean();

    const data = await Post.find({ 'author.id': id })
        .sort({
            $natural: -1,
        })
        .limit(15)
        .lean();





    return {
        props: {
            postData: data.map(db.convertDocToObj),
            author: Author.map(db.convertDocToObj),

        },
        revalidate: 120,
    };
}