/* export const themes = {
  light: {
    foreground: "#000000",
    background: "#ff00ff"
  },
  dark: {
    foreground: "#ffffff",
    background: "#000000"
  }
}; */


export function cTheme(theme,component) {
  return theme === "light" ? component.light : component.dark;
}