import React from "react";
import {Navbar} from 'react-bootstrap';
const Nav = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="Nav" href="#home">
          <img
            alt=""
            src="/movieslogo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          MyMovies.com
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Nav;
