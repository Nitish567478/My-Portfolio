import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: ${({ theme }) => theme.background};
    --bg-alt: ${({ theme }) => theme.backgroundAlt};
    --surface: ${({ theme }) => theme.surface};
    --surface-hover: ${({ theme }) => theme.surfaceHover};
    --border: ${({ theme }) => theme.border};
    --border-highlight: ${({ theme }) => theme.borderHighlight};
    --text: ${({ theme }) => theme.text};
    --text-secondary: ${({ theme }) => theme.textSecondary};
    --text-muted: ${({ theme }) => theme.textMuted};
    --nav-bg: ${({ theme }) => theme.navBg};
    --accent: ${({ theme }) => theme.accent};
    --accent-hover: ${({ theme }) => theme.accentHover};
    --accent-soft: ${({ theme }) => theme.accentSoft};
    --gradient: ${({ theme }) => theme.gradient};
    --gradient-secondary: ${({ theme }) => theme.gradientSecondary};
    --shadow: ${({ theme }) => theme.shadow};
    --glow: ${({ theme }) => theme.glow};
  }

  html, body, #root, .app-container, main {
    background-color: var(--bg);
    color: var(--text);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }

  /* Custom animated cursor styling */
  .animated-cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 36px;
    height: 36px;
    pointer-events: none;
    z-index: 99999;
    opacity: 0;
    transform: translate3d(-100px, -100px, 0);
    transition: opacity 0.2s ease, width 0.22s ease, height 0.22s ease;
  }

  .animated-cursor.is-visible {
    opacity: 1;
  }

  .animated-cursor.is-interactive {
    width: 48px;
    height: 48px;
  }

  .animated-cursor.is-pressed {
    width: 28px;
    height: 28px;
  }

  .cursor-core,
  .cursor-ring {
    position: absolute;
    inset: 50% auto auto 50%;
    border-radius: 999px;
    transform: translate(-50%, -50%);
  }

  .cursor-core {
    width: 6px;
    height: 6px;
    background: var(--accent);
    box-shadow: 0 0 10px var(--accent);
  }

  .cursor-ring {
    width: 100%;
    height: 100%;
    border: 1.5px solid var(--accent);
    background: rgba(255, 87, 51, 0.08);
    transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  }

  .animated-cursor.is-interactive .cursor-ring {
    transform: translate(-50%, -50%) scale(1.15);
    background: rgba(255, 87, 51, 0.2);
    border-color: #ff8e53;
  }

  .animated-cursor.is-pressed .cursor-ring {
    transform: translate(-50%, -50%) scale(0.85);
    background: rgba(255, 87, 51, 0.35);
  }
`;

export default GlobalStyle;