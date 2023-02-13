import React from "react";
import Nav from "./components/Nav";
import Hub from "./components/Hub";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Books from "./components/Books";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="notes" element={<Hub />} />
          <Route path="books" element={<Books />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
