import { RecentChanges } from "../types/types.ts";
import { useBookOrWork } from "../query/ApiQuery.tsx";

function RecentChangeCard({ change }: { change: RecentChanges }) {
  const work = useBookOrWork(change.changes["0"].key);

  if (work.isLoading) {
    return (
      <tr>
        <td>Chargement...</td>
      </tr>
    );
  } else if (work.isError) {
    return;
  } else if (work.isSuccess) {
    return (
      <tr>
        <td>{new Date(change.timestamp).toLocaleString()}</td>
        <td>{change.kind}</td>
        <td>{change.changes[0].key.split("/")[2]}</td>
        <td>{change.comment}</td>
        <td>{change.author.key.split("/")[2]}</td>
      </tr>
    );
  }

  return;
}

export default RecentChangeCard;
