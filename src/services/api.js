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

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
