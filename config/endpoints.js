import api from "./api";

const endpoints = {
  category: {
    single: "/category/:name/:id",
    all: "/category",
    sidebarPost: `${api}/category/sidebar/:id`,
  },
  subCategory: {
    single: "/subcategory/:name/:id",
    all: "/subCategory",
  },
  rss: {
    all: "/rss/all",
  },
  users: {
    all: `${api}/user`,
  },
  post: {
    getPostByCategory: `${api}/category/:id`,
    getPostBySubCategory: `${api}/subCategory/:id`,
    breaking: `${api}/post/breaking`,
    recomanded: `${api}/post/mostrecomanded`,
    galleryIndex: `${api}/post/galleryIndex`,
  },
  pool: {
    get: `${api}/pool`,
  },
  susbcribe: `${api}/subscribe`,
};
export default endpoints;