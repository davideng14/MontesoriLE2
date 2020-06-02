import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {profile} = props;

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Feria Empresarial LE2</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            { profile === 'business' ? 
                <>
                    <NavItem>
                        <NavLink>Analize</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Categories</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Search</NavLink>
                    </NavItem>
                </>:
                <>
                    <NavItem>
                        <NavLink>My Profile</NavLink>
                    </NavItem>
                </>
            }
            <NavItem>
              <NavLink>Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;