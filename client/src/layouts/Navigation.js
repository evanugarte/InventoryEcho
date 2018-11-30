import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";


class Navigation extends Component {
  state = {
    isOpen: false,
    dropdownOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  toggleDropdown = () => {
    this.setState({ dropdownOpen : !this.state.dropdownOpen });
  };

  render() {
    return (
      <Navbar color="dark" dark expand="sm">
        <Container>
          <NavbarBrand href="/">iEcho</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="inventory">Inventory Mode</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="sale">Sale Mode</NavLink>
              </NavItem>
            </Nav>

            <Nav className="ml-auto" nav>
              <Dropdown navbar isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                <DropdownToggle navbar caret>
                  GitHub
                </DropdownToggle>
                <DropdownMenu dark>
                  <DropdownItem>
                    <NavLink href="https://github.com/evanugarte">Github (Evan)</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://github.com/alizand1992">Github (Ali)</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://github.com/SangT">Github (Sang)</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
        </Collapse>
        <NavbarToggler onClick={this.toggle} />

        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
