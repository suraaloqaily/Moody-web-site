import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonAppBar from "./components/navbar";
import StickyFooter from "./components/footer";
function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <StickyFooter />
    </div>
  );
}

export default App;
