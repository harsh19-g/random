import React from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Project } from './pages/Project';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
