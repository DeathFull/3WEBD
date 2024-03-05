import { useBookOrWork } from "../query/ApiQuery.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Button, Container, Image, Spinner } from "react-bootstrap";

function DetailPage() {
  const navigate = useNavigate();
  const { type, id } = useParams();
  const book = useBookOrWork(type ?? "", id ?? "");
  if (book.isLoading)
    return (
      <div className={"text-center"}>
        <p>Chargement...</p>
        <Spinner />
      </div>
    );
  if (book.isError) return <p>Erreur</p>;
  if (book.isSuccess) {
    if (book.data.error) {
      return (
        <Alert variant={"danger"} className={"text-center"}>
          <h4>Erreur !</h4>
          Impossible de trouver le livre ou l'oeuvre demandé.
        </Alert>
      );
    } else {
      console.log(book.data);

      let description;
      if (
        book.data.description !== undefined &&
        book.data.description.value !== undefined
      ) {
        description = book.data.description.value;
      } else if (typeof book.data.description === "string") {
        description = book.data.description;
      } else {
        description = "Pas de description disponible";
      }
      if (type === "works") {
        return <p>works</p>;
      } else {
        return (
          <Container className={"w-50 text-center"}>
            <p>
              {book.data.covers !== undefined && (
                <Image
                  src={`https://covers.openlibrary.org/b/id/${book.data.covers[0]}-M.jpg`}
                />
              )}
              <br />
              {book.data.title}
              <br />
              {book.data.author_name !== undefined
                ? book.data.author_name.join(", ")
                : "Auteur inconnu"}
              <br />
              {book.data.publish_date !== undefined
                ? book.data.publish_date.join(", ")
                : "Date de publication inconnue"}
              <br />
              {book.data.publisher !== undefined
                ? "Editeur " + book.data.publisher.join(", ")
                : "Editeur inconnu"}
              <br />
              {book.data.first_publish_date !== undefined
                ? "Année de première publication: " +
                  book.data.first_publish_date
                : "Année de première publication inconnue"}
              <br />
              <br />
              Description:
              <br />
              {description}
              <br />
            </p>
            <Button className={"mb-2"}>Ajouter à ma liste</Button>
            <br />
            <Button
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              Retour
            </Button>
          </Container>
        );
      }
    }
  }
  return <p>DetailPage</p>;
}

export default DetailPage;
