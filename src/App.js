import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductListing from './pages/ProductListing';
import Cart from './pages/Cart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductListing } />
          <Route exact path="/cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
