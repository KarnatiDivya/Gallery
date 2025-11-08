import React from "react";
import Gallery from "./Gallery";
import CounterPanel from "./CounterPanel"; 
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Task-1  Media Gallery</h1>
      <Gallery />

      <h1>Task-2  Counter App</h1>
      <CounterPanel initialValue={5} />
    </div>
  );
};

export default App;
