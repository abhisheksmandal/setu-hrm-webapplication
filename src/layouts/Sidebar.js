import { Button, Nav, NavItem } from "reactstrap";
// import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    // icon: "bi bi-speedometer2",
  },
  {
    title: "Project",
    href: "/project",
    // icon: "bi bi-bell",
  },
  {
    title: "Employee Registration",
    href: "/employeeregistration",
    // icon: "bi bi-bell",
  },
  {
    title: "Project Allocation",
    href: "/projectallocationsearch",
    // icon: "bi bi-bell",
  },
  {
    title: "Task Allocation",
    href: "/taskallocation",
    // icon: "bi bi-bell",
  },
  {
    title: "Employees",
    href: "/employees",
    // icon: "bi bi-bell",
  },
  {
    title: "Leaves",
    href: "/leaves",
    // icon: "bi bi-bell",
  },
  {
    title: "Reports",
    href: "/reports",
    // icon: "bi bi-bell",
  },
  // {
  //   title: "Badges",
  //   href: "/badges",
  //   icon: "bi bi-patch-check",
  // },
  // {
  //   title: "Buttons",
  //   href: "/buttons",
  //   icon: "bi bi-hdd-stack",
  // },
  // {
  //   title: "Cards",
  //   href: "/cards",
  //   icon: "bi bi-card-text",
  // },
  // {
  //   title: "Grid",
  //   href: "/grid",
  //   icon: "bi bi-columns",
  // },
  // {
  //   title: "Table",
  //   href: "/table",
  //   icon: "bi bi-layout-split",
  // },
  // {
  //   title: "Forms",
  //   href: "/forms",
  //   icon: "bi bi-textarea-resize",
  // },
  // {
  //   title: "Breadcrumbs",
  //   href: "/breadcrumbs",
  //   icon: "bi bi-link",
  // },
  // {
  //   title: "About",
  //   href: "/about",
  //   icon: "bi bi-people",
  // },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="text-center sideBar">
      <div className="d-flex align-items-center">
        {/* <Logo /> */}
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div>
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-white bg-visitedModule nav-link py-3"
                    : "nav-link text-black py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Button color="danger" tag="a" target="_blank" className="mt-3">
            <Link to="loginregister" className="text-white">Help</Link>
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
