/* eslint-disable react/no-unescaped-entities */

import MainContent from "@/components/home/MainContent";

import db from "../DB/Conn";
import Category from "../Model/categoryJs";

import SubCategory from "../Model/subCategory";
import Post from "../Model/postModel";
import { useEffect, useState } from "react";

import PlainSection from "@/components/home/PlainSection";
import CommonCategoryNews from "@/components/home/CommonCategoryNews";

import BlueNewsSection from "@/components/home/BlueNewsSection";
import GridPost from "@/components/home/GridPost";

import SideBarCommonNews from "@/components/home/SideBarCommonNews";
import dynamic from "next/dynamic";
import Seo from "@/components/common/Seo";
import HorizontalAds from "@/components/common/HorizontalAds";
import DownSidebar from "@/components/home/DownSidebar";
import SiteInfo from "Model/siteinfo";

const DynamicGridWizardSection = dynamic(() => import('../components/home/GridWithWizard'), {
  suspense: false,
  ssr: false
})
export default function Home({ postsData, category, subCategory, siteinfo }) {
  const [posts, setposts] = useState(postsData);

  const [seoInfo, setseoInfo] = useState(siteinfo[0])
  return (
    <>
      <Seo title={seoInfo?.title} description={seoInfo?.description} />


      <MainContent posts={posts} category={category} subCategory={subCategory} />
      <div className="main-content container">
        {

          category
            .filter((person) => person.isblueSection === true)
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            )
            .slice(0, 1)
            .map((categoryDetails) => (
              <>
                <BlueNewsSection
                  categoryDetails={categoryDetails}
                  post={posts
                    .filter((catFiltered) => catFiltered.category.id === categoryDetails._id)
                    .filter((filtered) => filtered.isFetaured === true)
                    .sort(
                      (a, b) =>
                        new Date(b.createdAt).getTime() -
                        new Date(a.createdAt).getTime()
                    )
                    .slice(0, 1)[0]}
                />
              </>
            ))


        }

      </div>
      <div className="main-content container">
        {
          category
            .filter((person) => person.isGridSection === true)
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            )
            .map((currentCategory, index) => (
              <>
                <div className="col-md-12 block-1">
                  <GridPost posts={posts.filter((post) => post.category.id === currentCategory._id)} categoryDetail={currentCategory} subCategory={subCategory.filter((currentSubCat) => currentSubCat.categoryId === currentCategory._id)} />
                </div>
              </>
            ))
        }


      </div>
      {
        category

          .filter((person) => person.gridWithWizard === true)
          .slice(0, Math.ceil((category.filter((filtered) => filtered.gridWithWizard === true)).length / 2))
          .map((categoryDetail) => (
            <>
              <DynamicGridWizardSection
                subCategory={subCategory.filter((curElem) => curElem.categoryId ===
                  categoryDetail._id)} posts={posts.filter((catFiltered) =>
                    catFiltered.category.id === categoryDetail._id)
                  } categoryDetail={categoryDetail} />
            </>
          ))
      }

      {/* Category Posts */}
      {
        category &&
        category
          .filter((person) => person.isPlainSection === true)
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .map((categoryDetail) => (
            <>
              <PlainSection categoryDetail={categoryDetail} posts={posts.filter((catFiltered) => catFiltered.category.id === categoryDetail._id)} />
            </>
          ))
      }






      <div className="main-content container">

        <div className="col-md-8 block-1">

          {
            category &&
            category
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
              )
              .filter((filtered) => filtered.addToComminSection === true)
              .slice(Math.ceil((category.filter((filtered) => filtered.addToComminSection === true)).length / 2), (category.filter((filtered) => filtered.addToComminSection === true)).length)
              .map((categoryDetail, index) => (

                <>
                  <CommonCategoryNews categoryDetail={categoryDetail} subCategory={subCategory.filter((curElem) => curElem.categoryId === categoryDetail._id)} posts={posts.filter((catFiltered) => catFiltered.category.id === categoryDetail._id)
                  } />

                </>
              ))
          }


        </div>
        <aside className="col-md-4">

          {/* <PopularNews posts={posts} /> */}



          {
            category &&
            category

              .filter((filtered) => filtered.addToComminSection === true)
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
              )
              .slice(Math.ceil((category.filter((filtered) => filtered.addToComminSection === true)).length / 2), (category.filter((filtered) => filtered.addToComminSection === true)).length)
              .map((categoryDetail) => (

                <>

                  <DownSidebar categoryDetail={categoryDetail}
                    subCategory=
                    {subCategory.filter((curElem) => curElem.categoryId ===
                      categoryDetail._id)} posts={
                        posts.filter((catFiltered) =>
                          catFiltered.category.id === categoryDetail._id)
                          .filter((filtered) => filtered.isFetaured === false)
                          .sort(
                            (a, b) =>
                              new Date(b.createdAt).getTime() -
                              new Date(a.createdAt).getTime()
                          )
                          .slice(posts
                            .filter((filtered) => filtered.isFetaured === false)
                            .filter((subCat) => subCat.subCategory.id !== '').length === 0 ? 2 : 5,

                            posts.filter((catFiltered) =>
                              catFiltered.category.id === categoryDetail._id).length

                          )

                      } />
                </>
              ))
          }



        </aside>
      </div>
      {
        category

          .filter((person) => person.gridWithWizard === true)
          .slice(Math.ceil((category.filter((filtered) => filtered.gridWithWizard === true)).length / 2), (category.filter((filtered) => filtered.gridWithWizard === true)).length)
          .map((categoryDetail) => (
            <>
              <DynamicGridWizardSection
                subCategory={subCategory.filter((curElem) => curElem.categoryId ===
                  categoryDetail._id)} posts={posts.filter((catFiltered) =>
                    catFiltered.category.id === categoryDetail._id)
                  } categoryDetail={categoryDetail} />


            </>
          ))
      }

      {/* <Footer /> */}





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
      { "category.id": category._id, isFetaured: false, isFetauredTop: false },
      { description: 0 }
    )
      .sort({
        $natural: -1,
      })

      .limit(9)
      .lean();

    data = [...data, ...res];
  });
  const FetaurepostLoader = cat.map(async (category) => {
    const res = await Post.find(
      { "category.id": category._id, isFetaured: true, isFetauredTop: false },
      { description: 0 }
    )
      .sort({
        updatedAt: -1,
      })

      .limit(1)
      .lean();

    data = [...data, ...res];
  });
  let fetauredTopPostData = []

  const fetaureTopPost = async () => {
    fetauredTopPostData = await Post.find(
      { isFetauredTop: true },
      { description: 0 }
    )
      .sort({
        updatedAt: -1,
      })

      .limit(1)
      .lean();
    // 
    return fetauredTopPostData
  }
  await Promise.all(postLoader);
  await Promise.all(FetaurepostLoader);
  const topPost = await fetaureTopPost()

  data = [...data, ...topPost]
  const subCat = await SubCategory.find().lean();
  let siteinfo = await SiteInfo.findOne({})
    .sort({
      $natural: -1,
    })

    .limit(1).lean();

  return {
    props: {
      postsData: data.map(db.convertDocToObj),
      category: cat.map(db.convertDocToObj),
      subCategory: subCat.map(db.convertDocToObj),
      siteinfo: [siteinfo]?.map(db.convertDocToObj)
    },
    revalidate: 120,
  };
}