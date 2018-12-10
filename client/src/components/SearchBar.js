/**
 * This class represents the searchbar that is seen in the inventory view.
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { sendQuery } from "../actions/itemActions";
import { Input, InputGroup, InputGroupAddon } from "reactstrap";
import { Link } from "react-router-dom";
import SearchDropdown from "./SearchDropdown";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      queryType: "barcode",
      modalShow: false
    };
  }

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
    console.log(this.state.queryType);
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

    this.setState({ query: "" });
  };

  /**
   * This function handles a change in the text box.
   * @param e the event itself
   */
  onChange = (e) => {
    this.setState({ query: e.target.value });
  }

  /**
   * This function handles an enter key pressed in the text box.
   * @param e the event itself
   */
  handleKeyDown = (e) => {
    if (e.which === 13) {
      //Dont submit the request, instead wait for the search button to be clicked
      e.preventDefault();
    }
  }

  /**
  * Render the class component
  */
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="container">
            <form onSubmit={this.sendBarcodeQuery.bind(this)}>
              <div className="input-group mr-auto">
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <SearchDropdown onChange={this.handleQueryChange} />
                  </InputGroupAddon>
                  <Input
                    style={{ height: 36 }}
                    type="input"
                    className="form-control"
                    name="name"
                    placeholder={`Search by ${this.state.queryType} here...`}
                    onKeyDown={this.handleKeyDown}
                    value={this.state.query}
                    onChange={this.onChange}
                  />
                </InputGroup>
              </div>
            </form>
            <div className="input-group-append">
              <Link to="/search">
                <button
                  className="btn btn-info"
                  type="button"
                  onClick={this.sendBarcodeQuery}
                >
                  Search
                    </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

SearchBar.propTypes = {
  // sendQuery: PropTypes.func.isRequired,
  //item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  query: state.query
});
// if this.props.query is empty we will not show the Search page

export default connect(
  mapStateToProps,
  { sendQuery }
)(SearchBar);