import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    text: string;
    navBg: string;
    accent: string;
    accentSoft: string;
    gradient: string;
    shadow: string;
  }
}