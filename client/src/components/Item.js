/**
 * This class represents an item component rendered in the inventory list
 */
import React, { Component } from "react";
import { ListGroupItem, Row, Col, Button } from "reactstrap";
import { CSSTransition } from "react-transition-group";
import { moneyFormat } from "../helpers/helpers";
import connect from "react-redux/es/connect/connect";

class Item extends Component {
  state = this.props.item;

  toggleShowEditModal = (item) => {
    this.props.toggleShowEditModal(item);
  };

  /**
   * Render the class component
   */
  render() {
    return (
      <CSSTransition key={this.state._id} timeout={500} classNames="fade">
        <React.Fragment>
          <ListGroupItem id={`itemtype-${this.props.id}`}>
            <div style={{ display: "inline-block", width: "90%" }}>
              <div style={{ float: "left" }}>
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
              <Button className={"btn btn-info float-right"} onClick={this.props.toggleShowEditModal.bind(this, this.state)}>Edit</Button>
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
  {}
)(Item);
