import { Wine } from '@prisma/client';
import { Link } from '@remix-run/react';
import { deleteWine } from '~/data/wines.server';

function wineListItem(wine: Wine) {
  function deletewineItemHandler() {
    // tbd
    console.log(wine)
    deleteWine(wine.id);
  }

  return (
    <article className="wine-item">
      <div>
        <h2 className="wine-title">Nom: {wine.name}</h2>
        <h3 className="wine-year">Année: {wine.year}</h3>
      </div>
      <div>
      <menu className="wine-actions">
        <button onClick={deletewineItemHandler}>Delete</button>
        <Link to={`${wine.id}/edit`}>Edit</Link>
        <Link to={`${wine.id}/editcarafe`}>Put in carafe</Link>
      </menu>
      </div>
    </article>
  );
}

export default wineListItem;
