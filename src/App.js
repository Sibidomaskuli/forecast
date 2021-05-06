import React from "react"; 
import Forecast from "./Forecast";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Forecast defaultCity="Cairo" /> 
      </div>      
    </div>
  );
}