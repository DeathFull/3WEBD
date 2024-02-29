import { RecentChanges } from "../types/types.ts";

function RecentChangeCard({ change }: { change: RecentChanges }) {
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

export default RecentChangeCard;
