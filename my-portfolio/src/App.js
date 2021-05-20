import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import NavBottom from "./pages/NavBottom";
import NavTop from "./pages/NavTop";
import SkillsPage from "./pages/SkillsPage";

function App() {
  return (
    <Router>
      <NavTop />
      <NavBottom />
      <HomePage />
      <AboutPage/>
      <main>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/skills" component={SkillsPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
