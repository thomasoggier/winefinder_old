import { Wine } from "@prisma/client";
import WineListItem from "./WineListItem";

function winesList({ wines }: {wines:Wine[]}) {
  return (
    <ol id="wines-list">
      {wines.map((wine: Wine) => (
        <li key={wine.id}>
          <WineListItem
            id={wine.id}
            name={wine.name}
            year={wine.year}
          />
        </li>
      ))}
    </ol>
  );
}

export default winesList;
