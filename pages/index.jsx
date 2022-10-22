/* eslint-disable react/no-unescaped-entities */

import MainContent from "@/components/home/MainContent";


import db from "../DB/Conn";
import Category from "../Model/categoryJs";

import SubCategory from "../Model/subCategory";
import Post from "../Model/postModel";
import { useState } from "react";


import url from "@/config/url";
import PlainSection from "@/components/home/PlainSection";
import CommonCategoryNews from "@/components/home/CommonCategoryNews";

import BlueNewsSection from "@/components/home/BlueNewsSection";
import GridPost from "@/components/home/GridPost";
import GridWithWizard from "@/components/home/GridWithWizard";
import SideBarCommonNews from "@/components/home/SideBarCommonNews";
import dynamic from "next/dynamic";
import Seo from "@/components/common/Seo";
import HorizontalAds from "@/components/common/HorizontalAds";
import SidebarAds from "@/components/common/SidebarAds";
const DynamicGridWizardSection = dynamic(() => import('../components/home/GridWithWizard'), {
  suspense: false,
  ssr: false
})
export default function Home({ postsData, category, subCategory }) {
  const [posts, setposts] = useState(postsData);

  return (
    <>
<Seo />
 

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
                <GridWithWizard
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





      <HorizontalAds/>
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
                .map((categoryDetail , index) => (

                  <>
                    <CommonCategoryNews categoryDetail={categoryDetail} subCategory={subCategory.filter((curElem) => curElem.categoryId === categoryDetail._id)} posts={posts.filter((catFiltered) => catFiltered.category.id === categoryDetail._id)
                    } />
                    {
                      index % 2 === 0 ? <HorizontalAds /> : null
                    }
                  </>
                ))
            }


          </div>
          <aside className="col-md-4">

            {/* <PopularNews posts={posts} /> */}

         <SidebarAds/>

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

                    <SideBarCommonNews categoryDetail={categoryDetail}
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
                              .filter((subCat) => subCat.subCategory.id !== '').length === 0 ? 7 : 5,

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