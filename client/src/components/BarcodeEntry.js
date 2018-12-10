/**
 * This class represents the searchbar that is seen in the sale view.
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { sendQuery } from "../actions/itemActions";
import {
  Input,
  InputGroup,
  InputGroupAddon,
  Modal,
  ModalHeader
} from "reactstrap";
import SaleModalResults from "./SaleModalResults";
import SearchDropdown from "./SearchDropdown";

class BarcodeEntry extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      modal: false,
      queryType: "barcode",
      query: 0
    };
  }

  /**
   * This function handles an enter key pressed in the text box.
   * @param e the event itself
   */
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.sendBarcodeQuery();
    }
  };

  /**
   * This function handles a change in the text box.
   * @param e the event itself
   */
  handleChange = (e) => {
    this.setState({
      query: e.target.value
    });
  };

  /**
  * This function handles a change in the query drop down menu.
  * @param e the event itself
  */
  handleQueryChange = (e) => {
    this.setState({
      queryType: e.target.value
    });
  }

  /**
  * This function sends a query to our itemActions.js file,
  * to search the database for an item either by barcode or name.
  */
  sendBarcodeQuery = () => {
    let newQuery = null;
    if (this.state.queryType === "barcode") {
      newQuery = {
        barcode: this.state.query
      }
    } else {
      newQuery = {
        name: this.state.query
      }
    }
    this.props.sendQuery(newQuery);
    console.log(newQuery);
    this.toggle();

    this.setState({ query: null });
  };

  /**
   * Toggles the sale modal either open or closed.
   */
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  /**
   * Render the class component
   */
  render() {
    return (
      <div>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <SearchDropdown onChange={this.handleQueryChange} />
          </InputGroupAddon>
          <Input
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder={`Enter ${this.state.queryType} here...`}
          />
        </InputGroup>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Sell Item</ModalHeader>
          <SaleModalResults toggle={this.toggle} />
        </Modal>
      </div>
    );
  }
}

/**
 * THE BOTTOM TWO FUNCTIONS CONNECT OUR BACKEND
 * PROP FUNCTIONS TO THE ACTIONS, REDUCERS, AND MONGODB
 */
const mapStateToProps = state => ({
  query: state.query
});
// if this.props.query is empty we will not show the Search page

export default connect(
  mapStateToProps,
  { sendQuery }
)(BarcodeEntry);
