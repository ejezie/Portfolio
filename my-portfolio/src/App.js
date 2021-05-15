import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="home__wrap">
          <div className="sidebarw">
            <Sidebar />
          </div>
          <div className="main__body">
            <HomePage />
          </div>
        </div>
        <main>
          {/* <Switch><Route exact path="/" component={}/></Switch> */}
        </main>
      </div>
    </Router>
  );
}

export default App;
