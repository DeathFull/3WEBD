import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  const navigate = useNavigate();
  const [params, setParams] = useState({});
  const goToQuickResults = () =>
    navigate({
      pathname: "/quickresults",
      search: `?${createSearchParams(params)}`,
    });

  return (
    <Navbar bg="dark" data-bs-theme="dark" className={"p-4 mb-4"}>
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>Town's Lib</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setParams({ q: e.target.value })}
          />
          <Button
            variant="outline-success"
            onClick={(e) => {
              e.preventDefault();
              goToQuickResults();
            }}
          >
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Header;
