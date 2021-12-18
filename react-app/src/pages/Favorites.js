import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function FavoritesPage() {
  const favoriteContext = useContext(FavoritesContext);

  let content;

  if (favoriteContext.totalFavorites === 0) {
    content = <p>You dont have any favorites list</p>;
  } else {
    content = <MeetupList meetups={favoriteContext.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
