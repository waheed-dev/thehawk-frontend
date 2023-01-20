const url = {
  home: "/",
  conatct: "/contact-us",
  policy: "/policy",
  category: {
    single: "/category/:name/:id",
  },
  author: {
    single: "/author/:name/:id",
  },
  subCategory: {
    single: "/subcategory/:name/:id",
  },
  post: {
    single: "/posts/:title/:id",
  },
  search: "/search/:q",
  tag: "/tag/:keyword",
};
export default url;
