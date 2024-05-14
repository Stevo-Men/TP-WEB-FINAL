async function fetchProducts() {
  try {
      const response = await fetch('https://dummyjson.com/products');
      const json = await response.json();
      const products = json.products.slice(0, 3);
      return products;
  } catch (error) {
      console.error('Error fetching products:', error);
      return null;
  }
}

async function populateProducts() {
  const products = await fetchProducts();
  if (!products) {
      console.error('Failed to fetch products');
      return;
  }

  const cardImages = document.querySelectorAll('.card-img-top');
  const cardTitles = document.querySelectorAll('.card-title');
  const cardTexts = document.querySelectorAll('.card-text');

  products.forEach((product, index) => {
      if (index < cardImages.length) {
          cardImages[index].src = product.images; // Assuming 'image' is the key for the image URL in your JSON data
          cardImages[index].alt = product.title; // Assuming 'title' is the key for the product title in your JSON data
          cardTitles[index].textContent = product.title;
          cardTexts[index].textContent = product.description;
      }
  });
}

// Call populateProducts to populate the card group
populateProducts();
