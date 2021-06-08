import "./App.scss";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import NavBottom from "./pages/NavBottom";
import NavTop from "./pages/NavTop";
import SkillsPage from "./pages/SkillsPage";
import BackgroundPage from "./pages/BackgroundPage";
import Footer from "./pages/Footer";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function App() {
  const [isDark, setDark] = useState(false);

  return (
    <div>
      <BackgroundPage isDark={isDark} />
      <NavTop setDark={setDark} isDark={isDark} />
      <NavBottom isDark={isDark} />
      <HomePage isDark={isDark} />
      <Footer />
    </div>
  );
}

export default App;
