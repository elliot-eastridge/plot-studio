import * as React from "react";

export const ThemeContext = React.createContext({
  background: "",
  setBackground: () => {},
  mono: "",
  setMono: () => {}
});
