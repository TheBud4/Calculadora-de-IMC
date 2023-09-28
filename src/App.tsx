import "./styles/global.css";
import { useState } from "react";
import "./components/CalculateIMC";
import { CalculateIMC } from "./components/CalculateIMC";
function App() {
  return (
    <div>
      <CalculateIMC />
    </div>
  );
}

export default App;
