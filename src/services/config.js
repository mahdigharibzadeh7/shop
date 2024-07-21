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

export default products_api;
export { getProductById };
