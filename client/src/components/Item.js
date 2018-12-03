import React, { Component } from "react";
import { ListGroupItem, Button, Row, Col } from "reactstrap";
import { CSSTransition } from "react-transition-group";
import { moneyFormat } from "../helpers/helpers";
import { deleteItem } from "../actions/itemActions";
import connect from "react-redux/es/connect/connect";

class Item extends Component {
  state = this.props.item;

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  toggleShowEditModal = (item) => {
    this.props.toggleShowEditModal(item);
  };

  render() {
    return (
      <CSSTransition key={this.state._id} timeout={500} classNames="fade">
        <React.Fragment>
          <ListGroupItem id={`itemtype-${this.props.id}`}>
            <div style={{ display: "inline-block", width: "90%" }}>
              <div style={{ float: "left" }} onClick={this.props.toggleShowEditModal.bind(this, this.state)}>
                <Row>
                  <h3>{this.state.name}</h3>
                </Row>
                <Row>
                  <Col>
                    <p>Quantity: {this.state.quantity}</p>
                  </Col>
                  <Col>
                    <p>Sale Price: {moneyFormat(this.state.sellPrice)}</p>
                  </Col>
                </Row>
                <Row>
                  {!this.state.description.includes("No Description Set") ? <p style={{ fontStyle: "italic" }}>{this.state.description} </p> : ""}
                </Row>
              </div>
              <Button className={"btn btn-danger float-right"}
                onClick={this.onDeleteClick.bind(this, this.state._id)}
              >
                &times;
            </Button>
            </div>
          </ListGroupItem>

        </React.Fragment>
      </CSSTransition>
    );
  }
}

const mapStateToProps = (state) => ({

});

export default connect(
  mapStateToProps,
  { deleteItem }
)(Item);
