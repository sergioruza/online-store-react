import React from 'react';
import { getCategories } from '../services/api';

class ProductListing extends React.Component {
  state = {
    search: '',
    dataCategories: [],
  };

  componentDidMount() {
    this.getCategoriesAPI();
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ search: value });
  };

  getCategoriesAPI = async () => {
    const dataCategories = await getCategories();
    this.setState({ dataCategories });
  };

  render() {
    const { search, dataCategories } = this.state;
    console.log(dataCategories);
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

        {
          dataCategories.map(({ name, id }) => (
            <label
              key={ id }
              htmlFor="category"
            >
              { name }
              <input
                type="radio"
                data-testid="category"
                id="category"
              />
            </label>
          ))
        }
      </div>
    );
  }
}

export default ProductListing;
