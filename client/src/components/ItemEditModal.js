import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Label
} from "reactstrap";
import { moneyFormat } from "./../helpers/helpers";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class ItemEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditModal: this.props.showEditModal,
      editActive: false,
      previouslyEdited: false,
      item: {
        name: null,
        quantity: null,
        sellPrice: null,
        purchasePrice: null,
        barcode: null,
        description: null,
        _id: null
      }
    };
  }

  handleKeyDown = (e) => {
    //Prevent the form being submitted by hitting the enter button
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  getClass = (id) => {
    if (!id.includes("quantity") && !id.includes("Price")) {
      return "word";
    } else {
      return "number";
    }
  }

  getStep = (id) => {
    if (id.includes("quantity")) {
      return "1";
    } else {
      return "0.01";
    }
  }

  renderEditComponent = () => {
    const itemValues = [
      { name: "Name", value: this.props.item.name, id: "name" },
      { name: "Quantity", value: this.props.item.quantity, id: "quantity" },
      {
        name: "Purchase Price",
        value: this.props.item.purchasePrice,
        id: "purchasePrice"
      },
      {
        name: "Sell Price",
        value: this.props.item.sellPrice,
        id: "sellPrice"
      },
      { name: "Barcode", value: this.props.item.barcode, id: "barcode" },
      {
        name: "Description",
        value: this.props.item.description,
        id: "description"
      }
    ];
    //Decide whether to render item data or textboxes to edit item data
    if (this.state.editActive) {
      //If edit button is enabled
      return (
        <React.Fragment>
          <p style={{ fontSize: 15 }}>
            Any fields left blank, unchanged, or with invalid entries will
            default to their original value.
          </p>
          {itemValues.map((item) =>
            <React.Fragment>
              <Label>{item.name}:</Label>
              <Input
                type={this.getClass(item.id)}
                min="0"
                step={this.getStep(item.id)}
                name={item.id}
                defaultValue={item.value}
                id={item.id}
                onKeyDown={this.handleKeyDown}
                placeholder={`Add ${item.name} Here...`}
                onChange={this.onChange}
              />
            </React.Fragment>
          )}
        </React.Fragment>
      );
    } else {
      //If edit button isn't enabled
      return (
        <React.Fragment>
          <h3>{this.props.item.name}</h3>
          <p>Qunantity: {this.props.item.quantity}</p>
          <p>Purchase Price: {moneyFormat(this.props.item.purchasePrice)}</p>
          <p>Sell Price: {moneyFormat(this.props.item.sellPrice)}</p>
          <p>Barcode: {this.props.item.barcode}</p>
          <p>Description: {this.props.item.description}</p>
        </React.Fragment>
      );
    }
  };

  toggle = () => {
    this.setState({
      showEditModal: !this.state.showEditModal
    });
  };

  toggleEditMode = () => {
    this.setState({
      editActive: !this.state.editActive,
      item: this.props.item
    });
  };

  onChange = (e) => {
    this.setState({
      item: {
        [e.target.id]: e.target.value,
        _id: this.props.item._id
      }
    });
  };

  sumbitEdit = () => {
    this.props.addItem(this.state.item);
    this.toggleEditMode();
    this.setState({
      previouslyEdited: true
    });
  };

  render() {
    if (this.props.item !== null) {
      return (
        <Modal
          isOpen={this.props.showEditModal}
          toggle={this.props.toggleShowEditModal}
        >
          <Form>
            <ModalHeader toggle={this.props.toggleShowEditModal}>
              <h2>Edit Item</h2>
              <Button onClick={this.toggleEditMode}>Edit</Button>
            </ModalHeader>
            <ModalBody>{this.renderEditComponent()}</ModalBody>
            <ModalFooter>
              {this.state.editActive ? (
                <Button className={"btn btn-primary"} onClick={this.sumbitEdit}>
                  Save
                </Button>
              ) : (
                  <p />
                )}
              <p>
                {this.state.previouslyEdited && !this.state.editActive
                  ? "Click Close to see Changes"
                  : ""}
              </p>
              <Button
                className={"btn btn-danger"}
                onClick={this.props.toggleShowEditModal}
              >
                {this.state.editActive ? "Cancel" : "Close"}
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      );
    } else {
      return <div />;
    }
  }
}

ItemEditModal.propTypes = {
  addItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = (state) => { };

export default connect(
  mapStateToProps,
  { addItem }
)(ItemEditModal);
