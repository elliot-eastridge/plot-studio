import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Lines from "./pages/lissajous";
import Test from "./pages/test";
import NoMatch from "./pages/404";
import Layout from "./partials/layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lissajous" element={<Lines />} />
          <Route path="test" element={<Test />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;