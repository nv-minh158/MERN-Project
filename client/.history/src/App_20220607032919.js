import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>

  );
}

export default App;
