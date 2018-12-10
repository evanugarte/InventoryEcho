/**
 * This class is in charge of handling the routes in our application, so that going to
 * certain URL endpoints are handled correctly.
 */
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Nav
import Nav from "./Navigation";

// Views
import HomeView from "../views/HomeView";
import InventoryView from "../views/InventoryView";
import SaleView from "../views/SaleView";
import ItemSearch from "../components/ItemSearch"

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/inventory" component={InventoryView} />
          <Route path="/sale" component={SaleView} />
          <Route path="/search" component={ItemSearch} />
        </Switch>
      </div>
    );
  }
}

export default MainLayout;
