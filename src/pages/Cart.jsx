import React from 'react';
import ItensCarrinho from '../components/ItensCarrinho';

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

  render() {
    const { data } = this.state;
    return (
      <div>
        {
          data.length > 0 ? data.map(({ id, price, thumbnail, title }) => (
            <ItensCarrinho
              key={ id }
              id={ id }
              thumbnail={ thumbnail }
              title={ title }
              price={ price }
            />
          ))
            : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        }
      </div>
    );
  }
}

export default Cart;
