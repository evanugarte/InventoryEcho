/**
 * This class represents the search results after the user searches for an item
 * in the inventory view.
 */
import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { Row, Container } from "reactstrap"
import Item from "./Item";
import store from "./../store";
import ItemEditModal from "./ItemEditModal";

class ItemSearch extends Component {
  state = {
    showEditModal: false,
    itemToEdit: null
  };

  /**
   * Handle showing an edit modal if an item is rendered in the search result
   */
  toggleShowEditModal = (itemToEdit) => {
    this.setState({
      showEditModal: !this.state.showEditModal,
      itemToEdit: itemToEdit,
    });
  };

  render() {
    console.log(this.props);
    const { itemQuery } = this.props.item;

    if (itemQuery != null) {
      const itemsList = itemQuery.map(item => {
        return (
          <div className="col-md-3 pb-3" key={item._id}>
            <Item item={item} toggleShowEditModal={this.toggleShowEditModal} />
          </div>
        );
      });

      return (
        <Provider store={store}>
          <Container>
            <ItemEditModal showEditModal={this.state.showEditModal} item={this.state.itemToEdit} />
            <h1 className="category-title text-center font-weight-bold">
              Here's what we found...
          </h1>
            <hr className="shadow" />
            <Row>{itemsList}</Row>
          </Container>
        </Provider>
      );
    }
    //Return empty div if nothing found
    return <div><h1>No Items Found.</h1></div>;
  }
}

/**
 * THE BOTTOM TWO FUNCTIONS CONNECT OUR BACKEND
 * PROP FUNCTIONS TO THE ACTIONS, REDUCERS, AND MONGODB
 */
const mapStateToProps = (state) => ({
  item: state.item
});
// if this.props.query is empty we will not show the ItemSearch page
export default connect(
  mapStateToProps,
  {}
)(ItemSearch);
