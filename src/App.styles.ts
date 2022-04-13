import styled, { createGlobalStyle } from "styled-components";

import BackgroundImage from "./images/cash-macanaya.jpg";

export const GlobalStyle = createGlobalStyle`
html{
   height: 100%; 
}

body {
    background-image: url(${BackgroundImage});
    background-size: cover;
    box-shadow: inset 0 -500px 30px 30px rgba(0, 0, 0, 0.3);
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    height: 100vh;
}
* {
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
 
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);
    font-size: 2rem;
    margin: 30px auto;
  }

  h1 {
    font-family: "Press Start 2P", cursive;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background-color: #6ec708;
    border: none;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
