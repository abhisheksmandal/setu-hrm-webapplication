import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Click Me",
    href: "/project",
  },
];

// const showMobilemenu = () => {
//   document.getElementById("sidebarArea").classList.toggle("showSidebar");
// };
let location = useLocation();

<Nav vertical className="sidebarNav">
  {navigation.map((navi, index) => (
    <NavItem key={index} className="sidenav-bg">
      <Link
        to={navi.href}
        className={
          location.pathname === navi.href
            ? "text-primary nav-link py-3"
            : "nav-link text-secondary py-3 primary"
        }
      >
        <div className="button-group">
          <Button className="btn" color="primary">
            Create new project
          </Button>
        </div>
      </Link>
    </NavItem>
  ))}
</Nav>
