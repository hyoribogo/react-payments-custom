import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* https://github.com/Lazzzer00/Best-CSS-Reset-2024/blob/main/css_reset.css */
  *, *::before, *::after {
    box-sizing: border-box; 
  }

  * { 
    padding: 0;
    margin: 0;
  }

  ul[role='list'], ol[role='list'] {
    list-style: none;
  }

  li {
    list-style-type: none;
  }

  html:focus-within{
    scroll-behavior: smooth; 
  }

  a:not([class]) {
    text-decoration-skip-ink: auto; 
  }

  a { 
    color: inherit;
    text-decoration: none;
  }

  img, picture, svg, video, canvas {
    max-width: 100%;
    height: auto; 
    font-style: italic; 
    vertical-align: middle; 
    background-repeat: no-repeat; 
    background-size: cover;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *, *::before, *::after {
      transition: none;
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
    }
  }

  /* custom styles */
  input, button, textarea, select {
    all: unset;
  }

  body, html {
    height: 100%; 
    scroll-behavior: smooth; 
  }

  body {
    font-family: "Roboto", sans-serif;
    font-weight: 400 700;
    color: ${({ theme }) => theme.colors.gray_600};
  }

  div, p, span, h1, h2, h3, h4, h5, h6, li, button {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  div, p, span, li, button {
    font-size: ${({ theme }) => theme.fontSizes.md}
  }
`;

export default GlobalStyle;
