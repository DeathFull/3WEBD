import { useBookOrWork } from "../query/ApiQuery.tsx";
import { useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";

function DetailPage() {
  const { type, id } = useParams();
  const book = useBookOrWork(type ?? "", id ?? "");
  if (book.isLoading) return <p>Loading...</p>;
  if (book.isError) return <p>Error</p>;
  if (book.isSuccess) {
    if (book.data.error) {
      return (
        <Alert variant={"danger"} className={"text-center"}>
          <h4>Erreur !</h4>
          Impossible de trouver le livre ou l'oeuvre demandé.
        </Alert>
      );
    } else {
      return <p>{book.data.key}</p>;
    }
  }
  return <p>DetailPage</p>;
}

export default DetailPage;
