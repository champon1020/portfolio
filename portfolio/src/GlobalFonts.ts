import { createGlobalStyle } from "styled-components";

import SAOFONT from "./assets/fonts/SAOUITT-Regular.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: "myfont";
    src: local("myfont"), url(${SAOFONT}) format("woff2");
    font-style: normal;
  }

  h1, h2, h3, h4 {
    font-family: "myfont";
  }
`;
