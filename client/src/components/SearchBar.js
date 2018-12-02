import React, { Component } from "react";
import { connect } from "react-redux";
import { sendQuery } from "../actions/itemActions";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      modalShow: false
    };
  }

  onChange = (e) => {
    this.setState({ query: e.target.value });
    console.log(e.target.value);
  }

  handleKeyDown = (e) => {
    if (e.which === 13) {
      e.preventDefault();
    }
  }

  onSearchClick = () => {
    //NOTE: we assume user will search for name
    // submit query as object with to sendQuery at queryActions.js

    const newQuery = {
      name: this.state.query
    };
    this.props.sendQuery(newQuery);
    console.log(newQuery);

    this.setState({ query: "" });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="container">
            <form onSubmit={this.onSearchClick.bind(this)}>
              <div className="input-group mr-auto">
                <input
                  style={{ height: 36 }}
                  type="input"
                  className="form-control"
                  name="name"
                  placeholder="Search by name here..."
                  onKeyDown={this.handleKeyDown}
                  value={this.state.query}
                  onChange={this.onChange}
                />
              </div>
            </form>
            <div className="input-group-append">
              <Link to="/search">
                <button
                  className="btn btn-info"
                  type="button"
                  onClick={this.onSearchClick}
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