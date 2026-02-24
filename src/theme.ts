import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  background: "#a04848",
  text: "#ffffff",
  navBg: "rgba(255,255,255,0.95)",
  accent: "#ff5733",
  accentSoft: "rgba(255,87,51,0.3)",
  gradient: "linear-gradient(135deg, #ff5733, #ff8e53, #ffa726)",
  shadow: "0 4px 20px rgba(0,0,0,0.1)"
};

export const darkTheme: DefaultTheme = {
  background: "#242323",
  text: "#ffffff",
  navBg: "rgba(13,13,13,0.95)",
  accent: "#ff5733",
  accentSoft: "rgba(255,87,51,0.3)",
  gradient: "linear-gradient(135deg, #ff5733, #ff8e53, #ffa726)",
  shadow: "0 4px 20px rgba(0,0,0,0.3)"
};