async function fetchProducts() {
  try {
      const response = await fetch('https://dummyjson.com/products');
      const json = await response.json();
      const products = json.products;
      console.log(products);
      return products;
  } catch (error) {
      console.error('Error fetching products:', error);
      return null;
  }
}

(async () => {
  await fetchProducts();
 
})();


