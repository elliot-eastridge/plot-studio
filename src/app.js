import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Lines from "./pages/lissajous";
import Test from "./pages/test";
import NoMatch from "./pages/404";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="lissajous" element={<Lines />} />
      <Route path="test" element={<Test />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default App;
