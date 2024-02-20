import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { Container } from "react-bootstrap";

function MainPage() {
  return (
    <>
      <Container className={"d-flex flex-column min-vh-100"}>
        <Container>
          <Header />
        </Container>
        <Container className={"flex-grow-1"}>
          <Outlet />
        </Container>
        <Container>
          <Footer />
        </Container>
      </Container>
    </>
  );
}

export default MainPage;
