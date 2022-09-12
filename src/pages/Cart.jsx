import React from 'react';

class Cart extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getStorage();
  }

  getStorage = () => {
    const data = JSON.parse(localStorage.getItem('produtos'));
    if (data) this.setState({ data });
  };

  aumentarProduto = ({ target }) => {
    console.log(target);
  };

  render() {
    const { data } = this.state;
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
