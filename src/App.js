import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductListing from './Pages/ProductListing';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductListing } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
