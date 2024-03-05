import { useSearchParams } from "react-router-dom";
import {
  Alert,
  Col,
  Container,
  Pagination,
  Row,
  Spinner,
} from "react-bootstrap";
import { useQuickSearchBooks } from "../query/ApiQuery.tsx";
import ResultCard from "./ResultCard.tsx";
import { DocSearch } from "../types/types.ts";
import { useState } from "react";

function QuickResults() {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    searchParams.get("page") !== null && Number(searchParams.get("page")) >= 0
      ? Number(searchParams.get("page"))
      : 1,
  );
  const q = searchParams.get("q");
  const { isLoading, isError, isSuccess, data } = useQuickSearchBooks(
    q ?? "",
    Number(currentPage),
  );

  if (q !== null && q !== "") {
    if (isLoading) {
      return (
        <Alert variant={"warning"} className={"text-center"}>
          <h3>Chargement...</h3>
          <Spinner />
        </Alert>
      );
    } else if (isError) {
      return (
        <Alert variant={"danger"}>
          <h3>Erreur lors du chargement des résultats !</h3>
        </Alert>
      );
    } else if (isSuccess) {
      if (data.numFound > 0) {
        return (
          <Container fluid>
            <Pagination size={"lg"} className={"justify-content-center"}>
              <Pagination.First
                disabled={currentPage === 1}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(1);
                }}
              />
              <Pagination.Prev
                disabled={currentPage === 1}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(currentPage - 1);
                }}
              />
              <Pagination.Item active>{currentPage}</Pagination.Item>
              <Pagination.Next
                disabled={
                  currentPage ===
                  Math.floor(data.numFound / 100) +
                    (data.numFound % 100 > 0 ? 1 : 0)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(currentPage + 1);
                }}
              />
              <Pagination.Last
                disabled={
                  currentPage ===
                  Math.floor(data.numFound / 100) +
                    (data.numFound % 100 > 0 ? 1 : 0)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(
                    Math.floor(data.numFound / 100) +
                      (data.numFound % 100 > 0 ? 1 : 0),
                  );
                }}
              />
            </Pagination>
            <Row xs={1} md={5} className="g-4">
              {data.docs.map((doc: DocSearch) => (
                <Col key={doc.key}>
                  <ResultCard key={doc.key} result={doc} />
                </Col>
              ))}
            </Row>
            <Pagination size={"lg"} className={"justify-content-center"}>
              <Pagination.First
                disabled={currentPage === 1}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(1);
                }}
              />
              <Pagination.Prev
                disabled={currentPage === 1}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(currentPage - 1);
                }}
              />
              <Pagination.Item active>{currentPage}</Pagination.Item>
              <Pagination.Next
                disabled={
                  currentPage ===
                  Math.floor(data.numFound / 100) +
                    (data.numFound % 100 > 0 ? 1 : 0)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(currentPage + 1);
                }}
              />
              <Pagination.Last
                disabled={
                  currentPage ===
                  Math.floor(data.numFound / 100) +
                    (data.numFound % 100 > 0 ? 1 : 0)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(
                    Math.floor(data.numFound / 100) +
                      (data.numFound % 100 > 0 ? 1 : 0),
                  );
                }}
              />
            </Pagination>
          </Container>
        );
      } else {
        return (
          <Alert variant={"danger"}>
            <h3>Aucun résultat !</h3>
          </Alert>
        );
      }
    } else {
      return (
        <Alert variant={"danger"}>
          <h3>Erreur lors du chargement des résultats !</h3>
        </Alert>
      );
    }
  } else {
    return (
      <Alert variant={"danger"}>
        <h3>Recherche incorrecte !</h3>
      </Alert>
    );
  }
}

export default QuickResults;
