import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Sidebar from './components/sidebar/sidebar';
import NavBar from './components/navigation-bar/navbar';
import About from './pages/about/about';
import Resume from './pages/resume/resume';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';

function App() {
  return (
    <main>
      <Sidebar />
      <article>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/about" element={ <About /> } />
            <Route path="/resume" element={ <Resume /> } />
            <Route path="/portfolio" element={ <Portfolio /> } />
            <Route path="/contact" element={ <Contact /> } />
          </Routes>
        </Router>
      </article>
    </main>
  );
}

export default App;