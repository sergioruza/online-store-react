import React from 'react';

class ProdutoDetalhado extends React.Component {
  state = {
    // idDoProduto: '',
  };

  // componentDidMount() {
  //   this.pegarId();
  // }

  pegarId = () => {
    // const { match: { params: { id } } } = this.props;
    // console.log(id);
  };

  render() {
    // const { value } = this.props;
    // // : { params: { id } }
    // console.log(value);
    return (
      <div>
        <button type="button" onClick={ this.pegarId }>Pegar</button>
      </div>
    );
  }
}

export default ProdutoDetalhado;
