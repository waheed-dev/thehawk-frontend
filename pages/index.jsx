/* eslint-disable react/no-unescaped-entities */
import DownHeader from "@/components/common/DownHeader";
import MainContent from "@/components/home/MainContent";
import FetauredPost from "@/components/home/MainContent";
import Layout from "layout";
import db from "../DB/Conn";
import Category from "../Model/categoryJs";
import SubCategory from "../Model/subCategory";
import Post from "../Model/postModel";
import { useState } from "react";
import Link from "next/link";

import url from "@/config/url";
export default function Home({ postsData, category, subCategory }) {
  const [posts, setposts] = useState(postsData);
  return (
    <>
      <Layout>
    
        <MainContent posts={posts} category={category} subCategory={subCategory} />

        {/* Category Posts */}

        <div className="all-cat">
          <h5><span>All Categories</span></h5>
          <div className="ac-inner">
            <div className="col-md-12">
              <div className="col-md-6">
                <div className="bl-featured-big">
                  <div className="bl-meta">
                    <span><i className="fa fa-comments-o"></i> 4 Comments</span><br/>
                      <span><i className="fa fa-heart-o"></i> 23 Likes</span>
                  </div>
                  <img src="images/1/1.jpg" className="img-responsive" alt="" />
                  <div className="bl-info">
                    <span>Entertainment</span>
                    <h3><a href="#">Claritas Est Etiam Processus Dynamicus, Qui Sequitur Mutationem </a></h3>
                    <a className="rmore" href="#">Continue Reading <i className="fa fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="allcat-feed">
                  <img src="images/1/2.jpg" className="img-responsive" alt="" />
                  <p>Technology</p>
                  <h4><a href="#">Claritas Est Etiam Processus Dynamicus, Qui Sequitur ...</a></h4>
                </div>
                <div className="space30"></div>
                <div className="allcat-feed">
                  <img src="images/1/3.jpg" className="img-responsive" alt="" />
                  <p>Sport</p>
                  <h4><a href="#">Claritas Est Etiam Processus Dynamicus, Qui Sequitur ...</a></h4>
                </div>
              </div>

              <div className="col-md-3">
                <div className="allcat-feed">
                  <img src="images/1/4.jpg" className="img-responsive" alt="" />
                  <p>Entertainment</p>
                  <h4><a href="#">Claritas Est Etiam Processus Dynamicus, Qui Sequitur ...</a></h4>
                </div>
                <div className="space30"></div>
                <div className="allcat-feed">
                  <img src="images/1/5.jpg" className="img-responsive" alt="" />
                  <p>Culture</p>
                  <h4><a href="#">Claritas Est Etiam Processus Dynamicus, Qui Sequitur ...</a></h4>
                </div>
              </div>
            </div>

            <div className="clearfix"></div>

            <div className="col-md-12">
              <div className="col-md-3">
                <div className="allcat-feed">
                  <img src="images/1/6.jpg" className="img-responsive" alt="" />
                  <p>Politic</p>
                  <h4><a href="#">Claritas Est Etiam Processus Dynamicus, Qui Sequitur ...</a></h4>
                </div>
              </div>

              <div className="col-md-3">
                <div className="allcat-feed">
                  <img src="images/1/7.jpg" className="img-responsive" alt="" />
                  <p>Business</p>
                  <h4><a href="#">Claritas Est Etiam Processus Dynamicus, Qui Sequitur ...</a></h4>
                </div>
              </div>

              <div className="col-md-3">
                <div className="allcat-feed">
                  <img src="images/1/8.jpg" className="img-responsive" alt="" />
                  <p>Uncategorized</p>
                  <h4><a href="#">Claritas Est Etiam Processus Dynamicus, Qui Sequitur ...</a></h4>
                </div>
              </div>

              <div className="col-md-3">
                <div className="allcat-feed">
                  <img src="images/1/9.jpg" className="img-responsive" alt="" />
                  <p>Travelling</p>
                  <h4><a href="#">Claritas Est Etiam Processus Dynamicus, Qui Sequitur ...</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Banner full */}

        <div className="big-banner">
          <a href="#"><img src="images/banner/3.jpg" className="img-responsive" alt="" /></a>
        </div>


        {/* Footer */}

        <footer className="container">
          <div className="col-md-4 footer-widget footer-logo">
            <h3>Gazeta</h3>
            <br/>
              <p>
                <b>Our Office</b><br/>
                  D'Monument Building 2nd Floor<br/>
                    Freedom Street 109, Sleman 55518<br/>
                      Yogyakarta
                    </p>
                    <span className="copy">Copyright &copy; 2014 Gazeta. Web Design by <a href="#">PremiumLayersi</a></span>
          </div>
          
          <div className="col-md-4 footer-widget p-news">
            <h5>Most Commented</h5>
            <ul>
              <li>
                <img src="images/aside/1.jpg" alt="" />
                <div className="pn-info">
                  <span>Politic</span>
                  <h4><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></h4>
                </div>
              </li>
              <li>
                <img src="images/aside/2.jpg" alt="" />
                <div className="pn-info">
                  <span>Politic</span>
                  <h4><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></h4>
                </div>
              </li>
              <li>
                <img src="images/aside/3.jpg" alt="" />
                <div className="pn-info">
                  <span>Business</span>
                  <h4><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></h4>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-md-4 footer-widget f-gallery">
            <h5>Gallery Index</h5>
            <ul>
              <li><a href="#"><img src="images/aside/2/1.jpg" className="img-responsive" alt="" /></a></li>
              <li><a href="#"><img src="images/aside/2/2.jpg" className="img-responsive" alt="" /></a></li>
              <li><a href="#"><img src="images/aside/2/3.jpg" className="img-responsive" alt="" /></a></li>
              <li><a href="#"><img src="images/aside/2/4.jpg" className="img-responsive" alt="" /></a></li>
              <li><a href="#"><img src="images/aside/2/5.jpg" className="img-responsive" alt="" /></a></li>
              <li><a href="#"><img src="images/aside/2/6.jpg" className="img-responsive" alt="" /></a></li>
              <li><a href="#"><img src="images/aside/2/7.jpg" className="img-responsive" alt="" /></a></li>
              <li><a href="#"><img src="images/aside/2/8.jpg" className="img-responsive" alt="" /></a></li>
              <li><a href="#"><img src="images/aside/2/9.jpg" className="img-responsive" alt="" /></a></li>
            </ul>
          </div>
        </footer>
        
        {/* footer fixed */}

        <div className="footer-fixed">
          <div className="row">
            <div className="col-md-6">
              <ul className="footer-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Archives</a></li>
                <li><a href="#">Contributors</a></li>
              </ul>
            </div>
            <div className="col-md-6">
              <p className="copy1">Copyright &copy; <Link href={url.home}>
                <a>
                  thehawk.in 
              </a>
              </Link> <a onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }} className="fa fa-arrow-up"></a></p>
            </div>
          </div>
        </div>
    </Layout>
    </>
  )
}



export async function getStaticProps() {
  await db.dbConnect();
  const cat = await Category.find()
    .sort({
      $natural: -1,
    })
    .lean();

  let data = [];

  const postLoader = cat.map(async (category) => {
    const res = await Post.find(
      { "category.id": category._id },
      { description: 0 }
    )
      .sort({
        $natural: -1,
      })

      .limit(10)
      .lean();

    data = [...data, ...res];
  });
  
  await Promise.all(postLoader);
  const subCat = await SubCategory.find().lean();

  return {
    props: {
      postsData: data.map(db.convertDocToObj),
      category: cat.map(db.convertDocToObj),
      subCategory: subCat.map(db.convertDocToObj),
    },
    revalidate: 120,
  };
}