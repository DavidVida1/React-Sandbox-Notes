import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
      --color-primary: #61DAFB;
      --color-danger: #FF0060;
      --color-success: #1B9C85;
      --color-warning: #F7D060; 


      --background-color-black2:  rgba(0,19,36,1);
      --background-color-black:  #2b2b2b;
      --color-white:#FFFF;
      --color-black:#000;

      font-size:62.5%;
    }

::-webkit-scrollbar {
  width: 0rem;
}

::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background: #797979;
  transition: all 0.5s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
  background: #222224;
}

::-webkit-scrollbar-track {
  background: #363949;
}



*{
    margin: 0;
    padding: 0;
    outline: 0;
    appearance: 0;
    border: 0;
    text-decoration:none;
    box-sizing: border-box;
  
}

#root{position:relative}

html {
  scroll-behavior: smooth;
}

body{
 
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    background-color: var(--background-color-black2) ;
}



`;
