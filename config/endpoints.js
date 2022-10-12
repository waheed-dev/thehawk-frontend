import api from "./api";

const endpoints = {
  category: {
    single: "/category/:name/:id",
    all: "/category",
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
};
export default endpoints;