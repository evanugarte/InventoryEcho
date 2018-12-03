import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { addItem } from "../actions/itemActions";
import { addSoldItem } from "../actions/saleActions"
import { moneyFormat, validateWholeNumericalEntry } from "../helpers/helpers";
import {
  Button,
  Container,
  ModalBody,
  ModalFooter,
  Input,
  Row,
  Col,
  Label,
  Badge
} from "reactstrap";
import store from "../store";

class SaleModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: null,
      currentPrice: 0,
      currentQuantity: 0,
      soldItem: {
        name: "none",
        _id: "none",
        quantity: -1,
        sellPrice: 0,
        description: "none",
        barcode: 0
      }
    };
    this.currentItem = null;
  }

  updateSoldItem = () => {
    setTimeout(
      function () {
        //Save Desired Fields to the state to be logged in the database for sold items
        this.setState({
          soldItem: {
            name: this.currentItem.name,
            barcode: this.currentItem.barcode,
            description: this.currentItem.description,
            _id: this.currentItem._id,
            quantity: this.state.currentQuantity,
            sellPrice: this.state.currentPrice
          }
        });
      }
        .bind(this),
      1000
    );
  }

  updateTotal = () => {
    setTimeout(
      function () {
        let currentTotal = this.currentItem.sellPrice * this.state.currentQuantity
        currentTotal = parseFloat(Math.round(currentTotal * 100) / 100).toFixed(2);
        this.setState({
          currentPrice: currentTotal,
        });
      }
        .bind(this),
      10
    );

  }

  handleChange = (e) => {
    this.setState({
      currentQuantity: e.target.value
    });
    this.updateTotal();
    this.updateSoldItem();
  };

  formatResults = (itemQuery) => {
    this.currentItem = itemQuery[0];
    return (
      <div className="sale-container">
        <Row>
          <Col sm={{ offset: 1 }}>
            <Row>
              <h2>{this.currentItem.name}</h2>
            </Row>
            <Row>
              <p style={{ fontStyle: "italics" }}>{this.currentItem.description}</p>
            </Row>
          </Col>
          <Col sm={{ offset: 2 }}>
            <Row>
              <p>Sell Price: {moneyFormat(this.currentItem.sellPrice)}</p>
            </Row>
            <Row>
              <p>Quantity: {this.currentItem.quantity}</p>
            </Row>
            <Row>
              <p>Quantity After Purchase: {this.currentItem.quantity - this.state.currentQuantity}</p>
            </Row>
          </Col>
        </Row>
      </div>
    );
  };

  handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.which < 37 || e.which > 57) && e.which !== 8) {
      e.preventDefault();
    }
  }

  submitSaleResult = () => {
    //We need to verify that the quantity entered is within reasonable bounds
    if (this.currentItem.quantity >= this.state.currentQuantity && validateWholeNumericalEntry(this.state.currentQuantity)) {
      this.currentItem.quantity -= this.state.currentQuantity;
      this.updateSoldItem();
      this.props.addItem(this.currentItem);
      this.props.addSoldItem(this.state.soldItem);
      this.props.toggle();
    } else {
      alert("Error: Quantity entered was invalid or more than what is in stock.");
    }
  };

  render() {
    const { itemQuery } = this.props.item;

    if (itemQuery != null && itemQuery.length !== 0) {
      const itemsList = this.formatResults(itemQuery);

      return (
        <Provider store={store}>
          <React.Fragment>
            <Container>
              <ModalBody>You entered: {itemsList}</ModalBody>
              <Row>
                <Col md="4" xs="3">
                  <Label>Select Quantity:</Label>
                  <Input
                    type="number"
                    min="1"
                    max={this.currentItem.quantity}
                    defaultValue="1"
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col>
                  <Label>Total: </Label><Badge color="secondary">{moneyFormat(this.state.currentPrice)}</Badge>
                </Col>
              </Row>
            </Container>
            <ModalFooter>
              <Button color="primary" onClick={this.submitSaleResult}>
                Purchase
                </Button>{" "}
              <Button color="secondary" onClick={this.props.toggle}>
                Cancel
                </Button>
            </ModalFooter>
          </React.Fragment>
        </Provider>
      );
    }
    return (
      <React.Fragment>
        <ModalBody>We Couldn't Find Anything to Match Your Query.</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>
            Close
          </Button>
        </ModalFooter>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  soldItem: state.soldItem
});
// if this.props.query is empty we will not show the ItemSearch page
export default connect(
  mapStateToProps,
  { addItem, addSoldItem }
)(SaleModal);
