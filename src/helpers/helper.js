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

const price_counter_calc = (products) => {
  const itemsCounter = products.reduce(
    (counter, product) => counter + product.quantity,
    0
  );
  const totalPrice = products
    .reduce(
      (totalPrice, product) => totalPrice + product.price * product.quantity,
      0
    )
    .toFixed(2);

  return { itemsCounter, totalPrice };
};

const counterHandler = (type, product, dispatch) => {
  dispatch({ type, payload: product });
};

const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) return 0;
  else return state.selectedItems[index].quantity;
};

export {
  shortenText,
  categoryCapitalization,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
  price_counter_calc,
  counterHandler,
  productQuantity,
};
