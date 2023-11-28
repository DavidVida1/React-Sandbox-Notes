import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Header from "./Header";
import Sandbox from "./Sandbox";
import "./cssReset.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Sandbox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
