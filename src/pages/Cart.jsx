import React from 'react';
import ItensCarrinho from '../components/ItensCarrinho';

class Cart extends React.Component {
  state = {
    data: [],
    // disabled: false,
    quantidade: 1,
  };

  componentDidMount() {
    this.getStorage();
  }

  getStorage = () => {
    const data = JSON.parse(localStorage.getItem('produtos'));
    if (data) this.setState({ data });
  };

  // aumentarProduto = ({ target }) => {
  //   // const soma = Number(target.parentNode.previousSibling.innerText) + 1;
  //   // target.parentNode.previousSibling.innerText = soma;
  //   // this.setState({ quantidade: soma });
  //   // this.setState({ disabled: false });
  // };

  aumentarProduto = () => {
    this.setState((previousState) => ({ quantidade: previousState.quantidade + 1 }));
  };

  diminuirProduto = ({ target }) => {
    const sub = Number(target.parentNode.previousSibling.innerText) - 1;
    const minNumber = 2;
    if (Number(target.parentNode.previousSibling.innerText) < minNumber) {
      return true;
    }
    (target.parentNode.previousSibling.innerText = sub);
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
