import { getServerSideSitemap } from "next-sitemap";

import db from "DB/Conn";
import Category from "Model/categoryJs";
import Post from "Model/postModel";
import SubCategory from "Model/subCategory";
import url from "@/config/url";
import slugify from "slugify";

export const getServerSideProps = async (ctx) => {

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
      {
        description: 0,
        description: 0,
 
        author: 0,
        category: 0,
        subCategory: 0,
   
        postText: 0,
        subHeading: 0,
        isFetaured: 0,
        isFetauredTop: 0,
        isRight: 0,
        isTrending: 0,
        isPopular: 0,
        isTopRight: 0,
        tags: 0,
        keyWords: 0,
        pageTitle: 0,
        pageDescription: 0,
        socialShare: 0,
        video: 0,

        __v: 0,
      }
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
    
    const postPageUrl = data.map((post) => {
        return {
          lastmod: new Date(post.updatedAt).toISOString(),
          loc: `${process.env.NEXT_PUBLIC_DOMAIN}/${url.post.single.replace(':title' , slugify(post.postitle)).replace(':id' ,post. _id)}`,
        };

    })
    const categoryPageUrls = cat.map((category) => {
        return {
          lastmod: new Date(category.updatedAt).toISOString(),
          loc: `${process.env.NEXT_PUBLIC_DOMAIN}/${url.category.single
            .replace(":name", slugify(category.category))
            .replace(":id", category._id)}`,
        };
    })
        const subCategoryPageUrls = subCat.map((subcategory) => {
          return {
            lastmod: new Date(subcategory.updatedAt).toISOString(),
            loc: `${process.env.NEXT_PUBLIC_DOMAIN}/${url.subCategory.single
              .replace(":name", slugify(subcategory.subCategoryName))
              .replace(":id", subcategory._id)}`,
          };
        });
  const fields = [...postPageUrl, ...categoryPageUrls, ...subCategoryPageUrls];

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function SitemapIndex() {}
