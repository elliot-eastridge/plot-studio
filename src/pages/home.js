import * as React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>INDEX</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/lissajous">Lissajous!</Link> |{' '}
      </nav>
    </div>
  );
};

export default Home;
