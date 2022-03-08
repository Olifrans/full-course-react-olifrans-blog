import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailsMsn from "./DetailsMsn";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/mensagen/:id">
              <DetailsMsn />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
