import { useRecentChanges } from "../query/ApiQuery.tsx";
import { RecentChanges } from "../types/types.ts";
import RecentChangeCard from "./RecentChangeCard.tsx";
import { Col, Row } from "react-bootstrap";

function Home() {
  const recentChanges = useRecentChanges();

  if (recentChanges.isLoading) {
    return (
      <>
        <p>Chargement...</p>
      </>
    );
  } else if (recentChanges.isError) {
    return (
      <>
        <p>Erreur</p>
      </>
    );
  } else if (recentChanges.isSuccess) {
    return (
      <>
        <Row md={3} className="g-4 justify-content-center">
          {recentChanges.data.map((change: RecentChanges) => {
            return (
              <Col key={change.timestamp}>
                <RecentChangeCard change={change} />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }

  return (
    <>
      <p>Erreur</p>
    </>
  );
}

export default Home;
