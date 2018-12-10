/**
 * This class represents the list of item components in the inventory view
 */
import React, { Component } from "react";
import { Container, ListGroup } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

import Item from "./Item";
import ItemEditModal from "./ItemEditModal";

class InventoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditModal: false,
      itemToEdit: null
    };
    this.indexID = 1;
  }

  /**
   * This function is called as soon as the component renders.
   * When it is called, it sends a get request to itemActions.js
   * to load the items from mongoDB
   */
  componentDidMount() {
    this.props.getItems();
  };

  /**
   * This function opens the edit modal with the item to edit
   * @param itemToEdit an item object
   */
  toggleShowEditModal = (itemToEdit) => {
    this.setState({
      showEditModal: !this.state.showEditModal,
      itemToEdit: itemToEdit,
    })
  };

  /**
   * This function checks if the inventory is empty.
   * If so, it returns a small p tag telling the user.
   */
  handleEmptyInventory = () => {
    const { items } = this.props.item;
    //checks if the items array length is 0
    if (items === 0) {
      return <p>Your list is empty. Try refreshing the page or adding an item.</p>;
    } else {
      return;
    }
  }

  /**
   * This is a helper function to give the items alternating
   * class names to give them a pattern effect with CSS
   */
  incrementIndex = () => {
    this.indexID++;
  }

  /**
   * Render the class component
   */
  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ItemEditModal showEditModal={this.state.showEditModal} item={this.state.itemToEdit} />
        <ListGroup>
          <TransitionGroup>
            {items.map((item) => (
              <React.Fragment key={item._id}>
                <CSSTransition key={item._id} timeout={500} classNames="fade">
                  <Item
                    id={this.indexID % 2}
                    key={item.name}
                    item={item}
                    toggleShowEditModal={this.toggleShowEditModal}
                  />
                </CSSTransition>
                {this.incrementIndex()}
              </React.Fragment>
            ))}
            {this.handleEmptyInventory()}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

/**
 * THE BOTTOM THREE FUNCTIONS CONNECT OUR BACKEND
 * PROP FUNCTIONS TO THE ACTIONS, REDUCERS, AND MONGODB
 */
InventoryList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(InventoryList);
