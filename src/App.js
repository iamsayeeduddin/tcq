import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Chapters from "./screens/Chapters";
import Onboarding from "./components/Onboarding";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route path="/chapters" component={Chapters} />
        {/* <Chapters></Chapters> */}
        <Route path="/" component={Onboarding} />
        <Route path="/home" component={Home} />
      </Router>
    </>
  );
}

export default App;
