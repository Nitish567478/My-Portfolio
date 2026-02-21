import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: ${({ theme }) => theme.background};
    --text: ${({ theme }) => theme.text};
    --nav-bg: ${({ theme }) => theme.navBg};
    --accent: ${({ theme }) => theme.accent};
    --accent-soft: ${({ theme }) => theme.accentSoft};
    --gradient: ${({ theme }) => theme.gradient};
    --shadow: ${({ theme }) => theme.shadow};
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--bg);
    color: var(--text);
    transition: background 0.3s ease, color 0.3s ease;
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;