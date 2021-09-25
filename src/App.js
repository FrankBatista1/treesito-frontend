import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddTreeView from "./views/AddTreeView";
import HomeView from "./views/HomeView";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/home" component={HomeView} />
        <Route exact path="/plant" component={AddTreeView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
