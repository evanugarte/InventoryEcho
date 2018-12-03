import React, { Component } from "react";
import { Container } from "reactstrap";
import BarcodeEntry from "./../components/BarcodeEntry";
import RecentSales from "./../components/RecentSales";

import { Provider } from "react-redux";
import store from "./../store";

class SaleView extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Container id="saleWelcome">
            <h1 id="head2">Welcome to Sale View! Let's make a transaction!</h1>
            <BarcodeEntry />
            <RecentSales />
          </Container>
        </React.Fragment>
      </Provider>
    );
  }
}

export default SaleView;