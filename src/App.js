import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Results from "./components/Results/Results";
import request from "./components/api/request";

function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTrending);
  return (
    <div className="app">
      <Header />
      <Navbar setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
