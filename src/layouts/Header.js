import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
  Row,
  Col,
} from "reactstrap";
import { ReactComponent as LogoWhite } from "../assets/images/logos/xtremelogowhite.svg";
import user1 from "../assets/images/users/user1.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  return (
    <Navbar color="primary" dark expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <LogoWhite />
        </NavbarBrand>
        <Button
          color="primary"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar></Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="userButton">
          <DropdownToggle color="">
            <Row>
              {/* <div > */}
              <Col className="px-3">
                <img
                  src={user1}
                  alt="profile"
                  className="rounded-circle m-0"
                  width="30"
                ></img>
              </Col>
              <Col className="px-3">
                <div>
                  <p className="userName m-0 fw-bold">User Name</p>
                  <p className="userDesignation m-0">Designation</p>
                </div>
              </Col>
              {/* </div> */}
            </Row>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Link to="/profileview" className="dropdownLink">
                <div>Profile View</div>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/companyprofileview" className="dropdownLink">
                <div>View Company Profile</div>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
