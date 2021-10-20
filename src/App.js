import './App.css'; // Custom style
import React from 'react';
import Header from './components/Header'; // Contains navbar
import Cover from './components/Cover'; // Contains first screen on load

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="my-portfolio">
      <Header />
      <Cover />
    </div>
  );
}

export default App;
