import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Header from "./Header";
import Home from "./Home";
import "./cssReset.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
