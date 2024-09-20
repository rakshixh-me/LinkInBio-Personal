import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Art from "./pages/Art";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
