import './App.css'; // Custom style
import React from 'react';
import Portfolio from './components/Portfolio'; // Contains navbar

import 'bootstrap/dist/css/bootstrap.min.css';

componentDidMount();

function App() {
  return (
      <Portfolio />
  );
}

// Can't set custom Body styles in CSS, so must be done here
function componentDidMount() {
  document.body.style.backgroundColor = "#24305E"
  document.body.style.lineHeight = "2";
}

export default App;
