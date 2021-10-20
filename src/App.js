import './App.css'; // Custom style
import React from 'react';
import Header from './components/Header'; // Contains navbar
import Cover from './components/Cover'; // Contains first screen on load

import 'bootstrap/dist/css/bootstrap.min.css';

componentDidMount();

function App() {
  return (
    <div className="my-portfolio">
      <Header />
      <Cover />
    </div>
  );
}

function componentDidMount() {
  document.body.style.backgroundColor = "#24305E"// Set the style
}

export default App;
