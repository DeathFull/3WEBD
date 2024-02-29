import { DocSearch } from "../types/types.ts";
import { Card } from "react-bootstrap";

function ResultCard({ result }: { result: DocSearch }) {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={`https://covers.openlibrary.org/b/olid/${result.key.split("/")[2]}-M.jpg`}
        />
        <Card.Body>
          <Card.Title>{result.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default ResultCard;
