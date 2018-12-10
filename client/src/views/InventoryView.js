/**
 * This class represents the sale view itself.
 */
import React, { Component } from "react";
import InventoryList from "../components/InventoryList";
import ItemModal from "../components/itemModal";
import SearchBar from "../components/SearchBar";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./../store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.css";

class InventoryView extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Container id="inventoryWelcome">
            <h1 id="head1">Welcome to Inventory View! Let's take a look at your inventory...</h1>
            <ItemModal />
            <SearchBar />
            <InventoryList />
          </Container>
        </div>
      </Provider >
    );
  }
}

export default InventoryView;
