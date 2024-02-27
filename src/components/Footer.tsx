import { Container, Nav, NavItem } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className={"bg-dark"}>
      <footer className="py-3 mt-4">
        <Nav className="justify-content-center border-bottom pb-3 mb-3">
          <NavItem>
            <a href="#" className="nav-link px-2 text-light">
              Home
            </a>
          </NavItem>
          <NavItem>
            <a href="#" className="nav-link px-2 text-light">
              Features
            </a>
          </NavItem>
          <NavItem>
            <a href="#" className="nav-link px-2 text-light">
              FAQs
            </a>
          </NavItem>
        </Nav>
        <p className="text-center text-light">© 2024 TownLib's, Inc</p>
      </footer>
    </Container>
  );
}

export default Footer;
