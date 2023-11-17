import "./App.css";
import Home from "./assets/views/Home";
import { Routes, Route } from "react-router-dom";
import Correct from "./assets/views/Correct";
import Incorrect from "./assets/views/Incorrect";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/correct/:respuestaCorrecta" element={<Correct />}></Route>
        <Route path="/incorrect/:respuestaIorrecta" element={<Incorrect />}></Route>
      </Routes>
    </>
  );
}

export default App;
