import React from 'react';

class Cart extends React.Component {
  state = {
    data: [],
    disabled: true,
  };

  componentDidMount() {
    this.getStorage();
  }

  getStorage = () => {
    const data = JSON.parse(localStorage.getItem('produtos'));
    if (data) this.setState({ data });
  };

  aumentarProduto = ({ target }) => {
    const soma = Number(target.parentNode.previousSibling.innerText) + 1;
    target.parentNode.previousSibling.innerText = soma;
    this.setState({ disabled: false });
  };

  diminuirProduto = ({ target }) => {
    const sub = Number(target.parentNode.previousSibling.innerText) - 1;
    const minNumber = 3;
    if (Number(target.parentNode.previousSibling.innerText) < minNumber) {
      this.setState({ disabled: true });
    }
    (target.parentNode.previousSibling.innerText = sub);
  };

  render() {
    const { data, disabled } = this.state;
    return (
      <div>
        {
          data.length > 0 ? data.map(({ id, price, thumbnail, title }) => (
            <div key={ id }>
              <img src={ thumbnail } alt={ title } />
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <p data-testid="shopping-cart-product-quantity">1</p>
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
                  disabled={ disabled }
                  onClick={ this.diminuirProduto }
                >
                  -
                </button>
              </span>
              <br />
              <button type="button" data-testid="remove-product">Remover</button>
              <p>
                {' '}
                {price}
                {' '}
              </p>
            </div>
          ))
            : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        }
      </div>
    );
  }
}

export default Cart;
