import React from 'react';
import PropTypes from 'prop-types';

class ProductListing extends React.Component {
  state = {
    search: '',
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ search: value });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="productListing">
            Busca:
            <input
              type="text"
              id="productListing"
              onChange={ this.handleChange }
            />
          </label>
          <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </form>
      </div>
    );
  }
}

ProductListing.propTypes = {
};

export default ProductListing;
