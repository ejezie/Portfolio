import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="home__wrap">
            <Sidebar />
            <HomePage />
        </div>
        <AboutPage/>
        
        <main>
          <Switch>
          <Route exact path="/"/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/portfolio" component={PortfolioPage}/>
          <Route exact path="/blog" component={BlogPage}/>
          <Route exact path="/contact" component={ContactPage}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
