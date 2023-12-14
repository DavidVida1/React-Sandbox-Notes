import React from "react";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

const ReactUseContext = () => {
  return (
    <ReactUseContextWrapper>
      <h2 className="headerSection">UseContext WeBDevSimplified</h2>

      <ThemeProvider>
        <p>
          So context is to passing down props unto any of the children without
          manualy having to pass darkTheme so thats why you gotta wrap
          everything with .provider
        </p>
        <p>
          En gros .. le useState a pardefaut true et le toggle le change a false
          lorsqu'appuyer sur le boutton. dark theme est passer au autre
          component par le provider value.Comme le style et un bolean donc le
          style ne peux etre que vrai ou faux. blanc ou noir{" "}
        </p>

        <FunctionContextComponent />
      </ThemeProvider>
    </ReactUseContextWrapper>
  );
};

const ReactUseContextWrapper = styled.section`
  margin: 20px;

  & .headerSection {
    position: relative;
    font-weight: bold;
    font-size: 3rem;
    color: var(--color-white);

    &.headerSection:after {
      content: "";
      display: block;
      height: 2px;
      width: 170px;
      transform: translate3d(250%, -0.9rem, 0);
      background: white;
    }
  }
  & p {
    margin: 25px 0px;
  }
  & button {
    margin: 25px 0px;
    border: 1px solid white;
    border-radius: 3px;
    padding: 5px 10px;
  }
`;

export default ReactUseContext;
