const shortenText = (text) => text.split(" ").slice(0, 3).join(" ");

const categoryCapitalization = (category) => {
  return category
    .split(" ")
    .map((cat) => cat[0].toUpperCase() + cat.slice(1))
    .join(" ");
};

const searchProducts = (products, search) => {
  if (search) {
    const searchedProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
    return searchedProducts;
  } else return products;
};

const filterProducts = (products, category) => {
  if (category) {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    return filteredProducts;
  } else return products;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

export {
  shortenText,
  categoryCapitalization,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
};
