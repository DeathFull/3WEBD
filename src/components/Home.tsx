import { useRecentChanges } from "../query/ApiQuery.tsx";
import { RecentChanges } from "../types/types.ts";
import RecentChangeCard from "./RecentChangeCard.tsx";
import { Row } from "react-bootstrap";

function Home() {
  const recentChanges = useRecentChanges();
  const isLoading = recentChanges.some((change) => change.isLoading);
  const isError = recentChanges.some((change) => change.isError);

  if (isLoading) {
    return (
      <>
        <p>Chargement...</p>
      </>
    );
  } else if (isError) {
    return (
      <>
        <p>Erreur</p>
      </>
    );
  }

  const data = recentChanges.flatMap((change) => change.data);
  data.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
  );

  return (
    <>
      <Row md={3} className="g-4 justify-content-center">
        {data.map((change: RecentChanges) => {
          return <RecentChangeCard change={change} />;
        })}
      </Row>
    </>
  );
}

export default Home;
