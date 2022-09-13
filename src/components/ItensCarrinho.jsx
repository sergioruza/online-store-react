import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItensCarrinho extends Component {
  state = {
    quantidade: 1,
  };

  aumentarProduto = () => {
    this.setState((previousState) => ({ quantidade: previousState.quantidade + 1 }));
  };

  diminuirProduto = () => {
    const { quantidade } = this.state;
    if (quantidade > 1) {
      this.setState((previousState) => ({ quantidade: previousState.quantidade - 1 }));
    }
  };

  removerItem = ({ target }) => {
    target.parentElement.remove();
    const { id } = target;
    const itensDoCarrinho = JSON.parse(localStorage.getItem('produtos'));
    const itensFiltrados = itensDoCarrinho.filter((cadaItem) => cadaItem.id !== id);
    localStorage.setItem('produtos', itensFiltrados);
  };

  render() {
    const { id, price, thumbnail, title } = this.props;
    const { quantidade } = this.state;
    return (
      <div key={ id }>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p data-testid="shopping-cart-product-quantity">{ quantidade }</p>
        <span>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.aumentarProduto }
          >
            +
          </button>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            // disabled={ disabled }
            onClick={ this.diminuirProduto }
          >
            -
          </button>
        </span>
        <br />
        <button
          type="button"
          id={ id }
          data-testid="remove-product"
          onClick={ this.removerItem }
        >
          Remover
        </button>
        <p>
          {' '}
          {price}
          {' '}
        </p>
      </div>
    );
  }
}

ItensCarrinho.propTypes = {
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.number.isRequired,
};

export default ItensCarrinho;
