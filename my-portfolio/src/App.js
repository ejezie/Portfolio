import "./App.scss";
import HomePage from "./pages/HomePage";
import NavBottom from "./pages/NavBottom";
import NavTop from "./pages/NavTop";
import BackgroundPage from "./pages/BackgroundPage";
import Footer from "./pages/Footer";
import { useState } from "react";


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
