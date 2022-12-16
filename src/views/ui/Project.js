import {
  Card,
  Row,
  Col,
  CardTitle,
  Container,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Nav,
  NavItem,
} from "reactstrap";

import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/projectcreation",
  },
];

const Project = () => {
  let location = useLocation();

  return (
    <div>
      {navigation.map((navi, index) => (
        <Link
          
          to={navi.href}
          className=
             "nav-link text-secondary py-3"
             color="danger"
              
          
        >
          <span className="ms-3 d-inline-block">{navi.title}</span>
        </Link>
      ))}

      <div className="pt-4 mt-2">
        {navigation.map((navi, index) => (
          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href={navi.href}
          >
            Upgrade To Pro
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Project;
