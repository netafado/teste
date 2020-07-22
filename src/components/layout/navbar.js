import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="white" >
        <Container fluid>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
              target="_blank"
              id="navbar-brand"
            >
              <img src={require("../../assets/img/logo.svg")} />
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Achei fornecedor
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {

                  }}
                >
                  <p>Sobre</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {

                  }}
                >
                  <p>Sobre</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {

                  }}
                >
                  <p>Sobre</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <Button
                  className="nav-link btn-neutral btn-round"
                  color="info"
                  id="upgrade-to-pro"
                  onClick={(e) => e.preventDefault()}
                >
                  <p className="text-primary">Logar</p>
                </Button>
              </NavItem>

              <NavItem>
                <Button
                  className="nav-link btn-neutral btn-round"
                  color="info"
                  onClick={(e) => e.preventDefault()}
                >
                  <p className="text-primary">Cadastro</p>
                </Button>
              </NavItem>



            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
