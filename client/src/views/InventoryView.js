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
          <Container>
            <ItemModal />
            <SearchBar />
            <InventoryList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default InventoryView;
