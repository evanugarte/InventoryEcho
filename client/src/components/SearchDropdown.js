/**
 * This class represents the dropdown menu next to both search boxes in both sale and inventory mode.
 */
import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class SearchDropdown extends Component {
  state = {
    dropdownOpen: false,
    queryType: "Barcode",
    options: [
      { name: "Barcode", value: "barcode" },
      { name: "Name", value: "name" }
    ]
  };

  /**
   * Handles the change in querytype (name or barcode)
   * @param e event of changing dropdown query type
   */
  onChange = ((e) => {
    this.setState({
      queryType: e.target.name
    });
    this.props.onChange(e);
  });

  /**
   * Handle dropdown open or closed for reactstrap
   */
  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    return (
      <div>
        <ButtonDropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          className="querySelect"
          key="querySelect"
        >
          <DropdownToggle caret>{this.state.queryType}</DropdownToggle>
          <DropdownMenu>
            {this.state.options.map((option) => {
              return (<DropdownItem
                onClick={this.onChange}
                key={option.value}
                value={option.value}
                name={option.name}
              >
                {option.name}
              </DropdownItem>);
            })}
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}

export default SearchDropdown;
