import { DocSearch } from "../types/types.ts";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AddListModal from "./AddListModal.tsx";
import { useState } from "react";

function ResultCard({ result }: { result: DocSearch }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
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
          </Button>{" "}
          <Button onClick={() => setShow(!show)}>test</Button>
          {show && <AddListModal value={result.key} />}
        </Card.Footer>
      </Card>
    </>
  );
}

export default ResultCard;
