import { useRecentChanges } from "../query/ApiQuery.tsx";
import { RecentChanges } from "../types/types.ts";
import RecentChangeCard from "./RecentChangeCard.tsx";
import { Spinner, Table } from "react-bootstrap";

function Home() {
  const recentChanges = useRecentChanges();
  const isLoading = recentChanges.some((change) => change.isLoading);
  const isError = recentChanges.some((change) => change.isError);

  if (isLoading) {
    return (
      <>
        <div className={"text-center"}>
          <p>Chargement...</p>
          <Spinner />
        </div>
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type of change</th>
            <th>Book / Work ID</th>
            <th>Comment</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {data.map((change: RecentChanges) => {
            return <RecentChangeCard change={change} key={change.timestamp} />;
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Home;
