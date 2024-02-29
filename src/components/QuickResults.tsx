import { useSearchParams } from "react-router-dom";
import { Alert, Col, Row } from "react-bootstrap";
import { useQuickSearchBooks } from "../query/ApiQuery.tsx";
import ResultCard from "./ResultCard.tsx";
import { DocSearch } from "../types/types.ts";

function QuickResults() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  if (q !== null && q !== "") {
    const { isLoading, isError, isSuccess, data } = useQuickSearchBooks(q);
    if (isLoading) {
      return (
        <Alert variant={"warning"}>
          <h3>Chargement...</h3>
        </Alert>
      );
    } else if (isError) {
      return (
        <Alert variant={"danger"}>
          <h3>Erreur lors du chargement des résultats !</h3>
        </Alert>
      );
    } else if (isSuccess) {
      console.log(data);
      if (data.numFound > 0) {
        return (
          <Row xs={1} md={5} className="g-4">
            {data.docs.map((doc: DocSearch) => (
              <Col>
                <ResultCard key={doc.key} result={doc} />
              </Col>
            ))}
          </Row>
        );
      } else {
        return (
          <Alert variant={"danger"}>
            <h3>Aucun résultat !</h3>
          </Alert>
        );
      }
    }
    return;
  } else {
    return (
      <Alert variant={"danger"}>
        <h3>Recherche incorrecte !</h3>
      </Alert>
    );
  }
}

export default QuickResults;
