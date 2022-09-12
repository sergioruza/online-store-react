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
    console.log('oi', data);
    if (data) this.setState({ data });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        {
          data.length > 0 ? data.map(({ id, price, thumbnail, title }) => (
            <div key={ id }>
              {console.log(title)}
              <img src={ thumbnail } alt={ title } />
              {/* <p><span data-testid="shopping-cart-product-name">{ title }</span>, <span data-testid="shopping-cart-product-quantity"> {available_quantity} </span><></></p> */}
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <p data-testid="shopping-cart-product-quantity">1</p>
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
