import { RecentChanges } from "../types/types.ts";
import { Card } from "react-bootstrap";

function RecentChangeCard({ change }: { change: RecentChanges }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>change: {change.kind}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RecentChangeCard;
