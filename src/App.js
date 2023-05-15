import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./contexts/theme";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  const { themeName } = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
      </main>

      <Footer />
    </div>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
