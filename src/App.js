import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Rome" />
     <footer>
     This project was coded by <a href="https://ubiquitous-swan-8b46e3.netlify.app/about.html">Olha Aleksandrova</a>  and is 
     <a href="https://github.com/OlhaAleks/react-project-weather2"> open-sourced on Git-Hub</a>
     {" "} and hosted on {" "}
     <a href="https://effervescent-dolphin-492acf.netlify.app/">Netlify</a>
     </footer>
     </div>
    </div>
  );
}

