import { Container, Nav, NavItem } from "react-bootstrap";

function Footer() {
  return (
    <Container>
      <footer className="py-3 my-4">
        <Nav className="justify-content-center border-bottom pb-3 mb-3">
          <NavItem>
            <a href="#" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </NavItem>
          <NavItem>
            <a href="#" className="nav-link px-2 text-body-secondary">
              Features
            </a>
          </NavItem>
          <NavItem>
            <a href="#" className="nav-link px-2 text-body-secondary">
              Pricing
            </a>
          </NavItem>
          <NavItem>
            <a href="#" className="nav-link px-2 text-body-secondary">
              FAQs
            </a>
          </NavItem>
          <NavItem>
            <a href="#" className="nav-link px-2 text-body-secondary">
              About
            </a>
          </NavItem>
        </Nav>
        <p className="text-center text-body-secondary">
          © 2024 TownLib's, Inc
        </p>
      </footer>
    </Container>
  );
}

export default Footer;
