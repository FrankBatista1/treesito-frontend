import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddTreeView from "./views/AddTreeView";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/trees" component={AddTreeView}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
