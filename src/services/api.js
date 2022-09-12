export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(endpoint);
  const data = response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId) {
  const endpoint2 = `https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}`;
  const response2 = await fetch(endpoint2);
  const data2 = response2.json();
  return data2;
}

export async function getProductById(productId) {
  const endpoint3 = `https://api.mercadolibre.com/items/${productId}`;
  const response3 = await fetch(endpoint3);
  const data3 = response3.json();
  return data3;
}
