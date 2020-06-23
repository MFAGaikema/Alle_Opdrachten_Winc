import React from "react";
import { Link } from "react-router-dom";
import "./../../styling/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="link">
          <Link to="/">Gemiddelde cijfers</Link>
        </li>
        <li className="link">
          <Link to="/Assignments">Cijfers per opdracht</Link>
        </li>
        <li className="link">
          <Link to="/Aranka">Aranka</Link>
        </li>
        <li className="link">
          <Link to="/Evelyn">Evelyn</Link>
        </li>
        <li className="link">
          <Link to="/Floris">Floris</Link>
        </li>
        <li className="link">
          <Link to="/Hector">Hector</Link>
        </li>
        <li className="link">
          <Link to="/Martina">Martina</Link>
        </li>
        <li className="link">
          <Link to="/Maurits">Maurits</Link>
        </li>
        <li className="link">
          <Link to="/Rahima">Rahima</Link>
        </li>
        <li className="link">
          <Link to="/Sandra">Sandra</Link>
        </li>
        <li className="link">
          <Link to="/Storm">Storm</Link>
        </li>
        <li className="link">
          <Link to="/Wietske">Wietske</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
