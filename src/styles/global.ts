import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    // Base Colors
    --white: #f2f2f2;
    --dark-blue: #162730;
    --light-blue: #415463;
    --darkest-blue: #09141a;
    --lightest-blue: #afbbc7;
    --shadow: rgba(0,0,0,.5);
    --complementary-red: #ff3100;
    --complementary-green: #05b07b;

    // Glass Effect
    --blur: 5px;
    --glass: rgba(255,255,255,.3);
    --glass-border: rgba(255,255,255,.5);
    --glass-shadow: rgba(255,255,255,.25);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--darkest-blue);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-family: 'Roboto Slab', serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }

  .glass {
    background: var(--glass);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    box-shadow: 2px 2px 0 var(--glass-shadow);
    border-top: 1px solid var(--glass-border);
    border-left: 1px solid var(--glass-border);
  }

  .react-modal-overlay {
    background: var(--shadow);

    position: fixed;
    
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .react-modal-content {
    position: relative;

    width: 100%;
    height: 25rem;
    max-width: 36rem;
    background: var(--light-blue);
    border-radius: .25rem .25rem 0 0;
  }
`;