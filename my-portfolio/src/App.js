import "./App.scss";
import {useState} from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
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

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#090a11" : "#FFF"}
}`;

function App() {
  const [theme, setTheme] = useState({ mode: "light" })

  const handleThemeSwitch = () => {
    setTheme(theme.mode === 'dark' ? { mode: "light" } : { mode: "dark" })
  }

  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyle/>
        <BackgroundPage />
        <NavTop switchTheme = {handleThemeSwitch}/>
        <NavBottom />
        <HomePage />
        <AboutPage />
        <SkillsPage switchTheme = {handleThemeSwitch}/>
        <PortfolioPage />
        <BlogPage />
        <ContactPage />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
