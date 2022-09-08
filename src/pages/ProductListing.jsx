import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ItensResumidos from '../components/ItensResumidos';

class ProductListing extends React.Component {
  state = {
    search: '',
    itemPesquisado: [],
    pesquisou: false,
  };

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

  render() {
    const { search, itemPesquisado, pesquisou } = this.state;
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
            pesquisou ? pesquisa : null
          }
        </form>
      </div>
    );
  }
}

export default ProductListing;
