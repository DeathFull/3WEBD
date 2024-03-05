import { DocSearch } from "../types/types.ts";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ResultCard({ result }: { result: DocSearch }) {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={`https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`}
        />
        <Card.Body>
          <Card.Title>{result.title}</Card.Title>
          <Card.Text>
            Auteur:{" "}
            {result.author_name !== undefined
              ? result.author_name.join(", ")
              : "Auteur inconnu"}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button
            onClick={(e) => {
              e.preventDefault();
              navigate(`/detail${result.key}`);
            }}
          >
            Voir détail
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}

export default ResultCard;
