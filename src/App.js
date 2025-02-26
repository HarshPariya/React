import React from "react";
import './App.css';
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form1 from "./components/Form1";
import Submit from "./components/Submit";

function App() {
  // const[count,setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<><Form1/></>} />
          <Route path="/home" element={<Home />} />
          <Route path="/submit" element={<Submit/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


