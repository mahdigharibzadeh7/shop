const shortenText = (text) => text.split(" ").slice(0, 3).join(" ");

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
      console.log(filteredProducts)
    return filteredProducts;
  } else return products;
};

export { shortenText, searchProducts, filterProducts };
