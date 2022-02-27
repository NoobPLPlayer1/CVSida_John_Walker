import React from 'react';
import Nav from './components/Nav';
import Index from './components/Index';
import Projects from './components/Projects';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <Router>
      <Nav />
      <Routes >
        <Route path='/CVSida_John_Walker' element={<Index/>} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='/About' element={<About/>} />
      </Routes >
    </Router>
  );
}

export default App;