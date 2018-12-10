/**
 * This class represents the navbar at the top of iEcho
 */
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
  DropdownMenu
} from "reactstrap";

class Navigation extends Component {
  state = {
    isOpen: false,
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  toggleDropdown = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  render() {
    return (
      <Navbar color="dark" dark={true} expand="sm">
        <Container>
          <NavbarBrand href="/">iEcho</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="inventory">Inventory Mode</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="sale">Sale Mode</NavLink>
              </NavItem>
            </Nav>

            <Nav className="ml-auto" nav="true">
              <Dropdown
                navbar="true"
                isOpen={this.state.dropdownOpen}
                toggle={this.toggleDropdown}
              >
                <DropdownToggle navbar="true" caret>
                  GitHub
                </DropdownToggle>
                <DropdownMenu dark="true">
                  <DropdownItem>
                    <NavLink
                      href="https://github.com/evanugarte"
                      target="_blank"
                    >
                      Github (Evan)
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      href="https://github.com/alizand1992"
                      target="_blank"
                    >
                      Github (Ali)
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://github.com/SangT" target="_blank">
                      Github (Sang)
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      href="https://github.com/salonim12"
                      target="_blank"
                    >
                      Github (Saloni)
                    </NavLink>
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
