import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebarw">
          <Sidebar />
        </div>
        <div className="main__body">
        {/* <div className="fade"></div> */}
        </div>
        <main>
          {/* <Switch><Route exact path="/" component={}/></Switch> */}
        </main>
      </div>
    </Router>
  );
}

export default App;
