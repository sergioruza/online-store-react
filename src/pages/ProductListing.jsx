import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import ItensResumidos from '../components/ItensResumidos';

class ProductListing extends React.Component {
  state = {
    search: '',
    itemPesquisado: [],
    pesquisou: false,
    dataCategories: [],
  };

  componentDidMount() {
    this.getCategoriesAPI();
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ search: value });
  };

  buscarProdutos = async () => {
    const { search } = this.state;
    const listaDeProdutos = await getProductsFromCategoryAndQuery(search);
    const itensEscolhidos = listaDeProdutos.results;
    this.setState({ itemPesquisado: itensEscolhidos });
    this.setState({ pesquisou: true });
  };

  getCategoriesAPI = async () => {
    const dataCategories = await getCategories();
    this.setState({ dataCategories });
  };

  render() {
    const { search, itemPesquisado, pesquisou, dataCategories } = this.state;
    console.log(dataCategories);
    const pesquisa = itemPesquisado.length > 0
      ? itemPesquisado.map((cadaProduto) => (
        <ItensResumidos
          key={ cadaProduto.title }
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
            onClick={ this.buscarProdutos }
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
                { name }
                <input
                  type="radio"
                  data-testid="category"
                  id="category"
                />
              </label>
            ))
          }
          <div>
            {
              pesquisou ? pesquisa : null
            }
          </div>
        </form>
      </div>
    );
  }
}

export default ProductListing;
