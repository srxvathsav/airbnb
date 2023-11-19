import Home from "./Home";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Footer from "./Footer";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Routes } from 'react-router-dom';
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
