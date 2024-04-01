import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  const navigate = useNavigate();
  const [params, setParams] = useState({ q: "" });
  const goToQuickResults = () =>
    navigate({
      pathname: "/quickresults",
      search: `?${createSearchParams(params)}`,
    });

  return (
    <Navbar expand={"md"} bg="dark" data-bs-theme="dark" className={"p-4 mb-4"}>
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>Town's Lib</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Accueil</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>Recherche Avancée</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/lists">
              <Nav.Link>Listes</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  if (params.q !== null && params.q !== "") goToQuickResults();
                }
              }}
              onChange={(e) => setParams({ q: e.target.value })}
            />
            <Button
              variant="outline-success"
              onClick={(e) => {
                e.preventDefault();
                if (params.q !== null && params.q !== "") goToQuickResults();
              }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
