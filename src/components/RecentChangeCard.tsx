import { RecentChanges } from "../types/types.ts";
import { Card, Col } from "react-bootstrap";
import { useBook } from "../query/ApiQuery.tsx";

function RecentChangeCard({ change }: { change: RecentChanges }) {
  const work = useBook(change.changes["0"].key.split("/")[2]);

  if (work.isLoading) {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img src="" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Chargement...</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  } else if (work.isError) {
    return;
  } else if (work.isSuccess) {
    return (
      <Col key={new Date(change.timestamp).getTime()}>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            src={`https://covers.openlibrary.org/b/olid/${change.changes["0"].key.split("/")[2].toString()}-M.jpg`}
          />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>change: {change.kind}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  return;
}

export default RecentChangeCard;
