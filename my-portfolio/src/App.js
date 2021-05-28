import "./App.scss";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import NavBottom from "./pages/NavBottom";
import NavTop from "./pages/NavTop";
import SkillsPage from "./pages/SkillsPage";
import BackgroundPage from "./pages/BackgroundPage";

function App() {
  return (
    <>
      <BackgroundPage />
      <NavTop />
      <NavBottom />
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <PortfolioPage />
      <BlogPage />
      {/* <ContactPage /> */}
    </>
  );
}

export default App;
