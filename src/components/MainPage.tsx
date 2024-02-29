import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { Container } from "react-bootstrap";

function MainPage() {
  return (
    <>
      <Container fluid className={"d-flex flex-column min-vh-100 p-0"}>
        <Container fluid className={"p-0"}>
          <Header />
        </Container>
        <Container
          fluid
          className={
            "d-flex justify-content-center align-items-center flex-grow-1"
          }
        >
          <Outlet />
        </Container>
        <Container fluid className={"p-0"}>
          <Footer />
        </Container>
      </Container>
    </>
  );
}

export default MainPage;
