import {
  
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    tabs,
    pills,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from "reactstrap";
import React from 'react'


export default function NavEmp() {
  return (
    <div>NavEmp
        <div>NavEmp
        <Nav fill pills className="square border border-1" >
        <NavItem color="primary">
          <NavLink href="/EmployeeSearch">
          Personal Details
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Salary Details</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="#">Nominee Details</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="#">Bank Details</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="#">Upload Files</NavLink>
        </NavItem>
      </Nav>
    </div>
    </div>
  )
}
