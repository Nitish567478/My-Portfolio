import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    backgroundAlt: string;
    surface: string;
    surfaceHover: string;
    border: string;
    borderHighlight: string;
    text: string;
    textSecondary: string;
    textMuted: string;
    navBg: string;
    accent: string;
    accentHover: string;
    accentSoft: string;
    gradient: string;
    gradientSecondary: string;
    shadow: string;
    glow: string;
  }
}