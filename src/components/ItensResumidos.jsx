import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItensResumidos extends Component {
  render() {
    const { nome, imagem, preco } = this.props;
    return (
      <div data-testid="product" className="cardProduct">
        <p>{ nome }</p>
        <img src={ imagem } alt={ nome } />
        <p>
          R$:
          {' '}
          { preco }
        </p>
      </div>
    );
  }
}

ItensResumidos.propTypes = {
  nome: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  preco: PropTypes.number.isRequired,
};

export default ItensResumidos;
