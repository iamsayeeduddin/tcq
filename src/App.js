import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Chapters from "./screens/Chapters";
import Onboarding from "./components/Onboarding";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route path="/chapters" component={Chapters} />

        <Onboarding></Onboarding>
      </Router>
    </>
  );
}

export default App;
