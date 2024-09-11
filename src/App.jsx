import Navbar from "./Components/Navbar";
import "./style.css";
import ViewPage from "./Components/ViewPage";
import About from "./Components/About";
import Card from "./Components/Card";
import Projects from "./Components/Projects";
import Fact from "./Components/Fact";
import News from "./Components/News";
import Footer from "./Components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  // Get the current path
  const location = useLocation();

  // Check if we're on the homepage
  const isHome = location.pathname === "/";

  return (
    <div>
      <Navbar />
      {/* Show all components if on the homepage */}
      {isHome && (
        <>
          <ViewPage />
          <About />
          <Card />
          <Projects />
          <Fact />
          <News />
          <Footer />
        </>
      )}
      <Routes>
        {/* <Route path="/" element={<ViewPage />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/card" element={<Card />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/fact" element={<Fact />} />
        <Route path="/news" element={<News />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
};

export default App;
