import React from 'react';

class ProductListing extends React.Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ search: value });
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="productListing">
            Busca:
            <input
              type="text"
              id="productListing"
              onChange={ this.handleChange }
              value={ search }
            />
          </label>
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </form>
      </div>
    );
  }
}

export default ProductListing;
