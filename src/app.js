import React, { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { Grommet } from "grommet";
import { theme } from "./theme";
import { ThemeContext } from "./context";
import Home from "./pages/home";
import Lines from "./pages/lissajous";
import Test from "./pages/test";
import NoMatch from "./pages/404";

const App = () => {
  const [background, setBackground] = useState("#FFFFFF");
  const [mono, setMono] = useState("#000000");
  const value = useMemo(
    () => ({ background, setBackground, mono, setMono }),
    [background, mono]
  );

  return (
    <ThemeContext.Provider value={value}>
      <Grommet theme={theme} full >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="lissajous" element={<Lines />} />
          <Route path="test" element={<Test />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Grommet>
    </ThemeContext.Provider>
  );
};

export default App;
