import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar"></div>
        <div className="main__body"></div>
        <main>hello</main>
      </div>
    </Router>
  );
}

export default App;
