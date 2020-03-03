import { useState, useEffect, useRef } from "react";

export const textColor = {
  light: {
    color: "navy"
  },
  dark: {
    color: "#bbe1fa"
  }
};

export const textPositive = {
  color: "#2ecc71"
};
export const textNegative = {
  color: "#c0392b"
};

export function cTheme(theme, component) {
  return theme === "light" ? component.light : component.dark;
}

export function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;

      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);

        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },

    [] // Recall only if ref changes
  );

  return [ref, value];
}
