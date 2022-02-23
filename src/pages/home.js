import * as React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>INDEX</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/lissajous">Lissajous!</Link> |{' '}
        <Link to="/test">scratch pad</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
