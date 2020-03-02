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

export const textColor = {
  light: {
    color: 'navy'
  },
  dark:{
    color: '#bbe1fa'
  }
}


export function cTheme(theme,component) {
  return theme === "light" ? component.light : component.dark;
}