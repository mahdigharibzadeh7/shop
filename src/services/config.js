import axios from "axios";

const products_api = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

products_api.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error)
);

const getProductById = (id) => products_api.get(`/${id}`);

const getCategories = () => products_api.get("/categories");



export default products_api;
export { getProductById, getCategories };
