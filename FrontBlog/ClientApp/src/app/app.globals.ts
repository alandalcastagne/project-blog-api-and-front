
export const baseApiUrls = Object.freeze({
  baseApiUrlPost: "https://{apilink}Post/",
  baseApiUrlCategory: "https://{apilink}/Category/",
  baseApiurlUser: "https://{apilink}/User/",
})

export const GlobalVariables = Object.freeze({
  registerCategoryApiUrl: baseApiUrls.baseApiUrlCategory + 'RegisterCategory',
  getAllCategoriesApiUrl: baseApiUrls.baseApiUrlCategory + 'GetAllCategories',

  registerPostApiUrl: baseApiUrls.baseApiUrlPost + 'RegisterPost',
  getPostByIdApiUrl: baseApiUrls.baseApiUrlPost + 'GetById?id=',
  getAllPosts: baseApiUrls.baseApiUrlPost + 'GetAllPosts',
  getAllPostsWithCategorieAndDateApiUrl: baseApiUrls.baseApiUrlPost + 'GetAllPostsWithCategorieAndDate',
  getAllPostsByCategorie: baseApiUrls.baseApiUrlPost + 'GetByCategorie?category=',
  editPostByIdApiUrl: baseApiUrls.baseApiUrlPost + 'EditPostById?id=',
  deletePostByIdApiUrl: baseApiUrls.baseApiUrlPost + 'DeletePostById?id=',
});
export interface Categories {
  id: number;
  name: string;
}
export interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  categoryFK: number;
  category: any;
}

export interface Posts {
  title: string;
  description: string;
  date: string;
  categorie: string;
  id: number;
}


