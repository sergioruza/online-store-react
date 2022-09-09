import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import ItensResumidos from '../components/ItensResumidos';

class ProductListing extends React.Component {
  state = {
    search: '',
    itemPesquisado: [],
    dataCategories: [],
  };

  componentDidMount() {
    this.getCategoriesAPI();
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ search: value });
  };

  buscarProdutos = async (category) => {
    // const { search } = this.state;
    this.setState({ itemPesquisado: [] });
    const listaDeProdutos = await getProductsFromCategoryAndQuery(category);
    const itensEscolhidos = listaDeProdutos.results;
    this.setState({ itemPesquisado: itensEscolhidos });
  };

  getCategoriesAPI = async () => {
    const dataCategories = await getCategories();
    this.setState({ dataCategories });
  };

  onChangeRadio = ({ target }) => {
    const { value } = target;
    this.buscarProdutos(value);
  };

  render() {
    const { search, itemPesquisado, dataCategories } = this.state;
    const pesquisa = itemPesquisado.length > 0
      ? itemPesquisado.map((cadaProduto) => (
        <ItensResumidos
          key={ cadaProduto.id }
          nome={ cadaProduto.title }
          imagem={ cadaProduto.thumbnail }
          alt={ cadaProduto.title }
          preco={ cadaProduto.price }
        />))
      : <p>Nenhum produto foi encontrado</p>;
    return (
      <div>
        <Link to="/Cart" data-testid="shopping-cart-button">
          <button type="button">Carrinho</button>
        </Link>
        <form>
          <label htmlFor="productListing">
            Busca:
            <input
              type="text"
              id="productListing"
              data-testid="query-input"
              onChange={ this.handleChange }
              value={ search }
            />
          </label>
          <button
            type="button"
            data-testid="query-button"
            onClick={ () => this.buscarProdutos(search) }
          >
            Buscar
          </button>
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          {
            dataCategories.map(({ name, id }) => (
              <label
                key={ id }
                htmlFor="category"
              >
                <input
                  onChange={ this.onChangeRadio }
                  value={ name }
                  name="categories"
                  type="radio"
                  data-testid="category"
                  id="category"
                />
                { name }
              </label>
            ))
          }
          <div>
            {
              pesquisa
            }
          </div>
        </form>
      </div>
    );
  }
}

export default ProductListing;
