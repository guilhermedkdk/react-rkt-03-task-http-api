import { createGlobalStyle } from "styled-components";
import { mixins } from "./mixins";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme["background"]};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input {
    color: ${(props) => props.theme["text"]};
    ${mixins.fonts.textM};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["blue"]}; 
  }
`;
