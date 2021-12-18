/**
 * For the Todo application
 * @returns Components
 */

// import Todo from "./components/Todo";

// function App() {
//   return (
//     <div>
//       <h1>My To do</h1>
//       <Todo text="hello"></Todo>
//       <Todo text="No"></Todo>
//       <Todo text="Niggas"></Todo>
//     </div>
//   );
// }

// export default App;

/**
 * Part 2 for the routing practice
 * @returns Routing
 */

import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage></AllMeetupsPage>
        </Route>
        <Route path="/new-meetup">
          <NewMeetupsPage></NewMeetupsPage>
        </Route>
        <Route path="/favorites">
          <FavoritesPage></FavoritesPage>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
