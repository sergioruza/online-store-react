import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

class ProdutoDetalhado extends React.Component {
  state = {
    detalhesDoProduto: {},
    atributos: {},
  };

  componentDidMount() {
    this.pegarDetalhesDoProduto();
  }

  pegarDetalhesDoProduto = async () => {
    const { match: { params: { id } } } = this.props;
    const data = await getProductById(id);
    this.setState({ detalhesDoProduto: data, atributos: data.attributes });
  };

  render() {
    const { detalhesDoProduto, atributos } = this.state;
    return (
      <div>
        <h3 data-testid="product-detail-name">{detalhesDoProduto.title}</h3>
        <img
          src={ detalhesDoProduto.thumbnail }
          alt={ detalhesDoProduto.title }
          data-testid="product-detail-image"
        />
        <p data-testid="product-detail-price">{detalhesDoProduto.price}</p>
        <ol>
          Detalhes do Produto:
          {
            atributos.length > 0
              ? atributos
                .map(({ name }) => <li key={ name }>{name}</li>) : null
          }
        </ol>
        <Link to="/Cart">
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        </Link>
      </div>
    );
  }
}

ProdutoDetalhado.propTypes = {
  match: PropTypes.func.isRequired,
};

export default ProdutoDetalhado;
