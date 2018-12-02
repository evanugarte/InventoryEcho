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

  componentDidMount() {
    this.props.getItems();
  };

  toggleShowEditModal = (itemToEdit) => {
    this.setState({
      showEditModal: !this.state.showEditModal,
      itemToEdit: itemToEdit,
    })
  };

  incrementIndex = () => {
    this.indexID++;
  }

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
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

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
