import axios from "axios";

const products_api = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

products_api.interceptors.request.use((req) => {
  return req;
});

products_api.interceptors.response.use((res) => {
  return res.data;
});

const getProductById = (id) => products_api.get(`/${id}`);

const getCategories = () => products_api.get("/categories");

const getProductsByCategory = (category) =>
  products_api.get(`/category/${category}`);

export default products_api;
export { getProductById, getCategories, getProductsByCategory };
