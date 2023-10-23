import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle'; // Import Bootstrap's JavaScript

function MenuBar() {
  // No need for the useEffect block for vanilla JavaScript since Bootstrap handles the functionality

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="mainDropdown"
        data-toggle="dropdown"
      >
        Main Category
      </button>
      <ul className="dropdown-menu" aria-labelledby="mainDropdown">
        <li className="dropdown-submenu">
          <a
            className="dropdown-item"
            href="#"
            data-toggle="dropdown" // Use data-toggle to activate the submenu
          >
            Sub Category 1
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Sub-Sub Category 1.1</a></li>
            <li><a className="dropdown-item" href="#">Sub-Sub Category 1.2</a></li>
          </ul>
        </li>
        <li className="dropdown-submenu">
          <a
            className="dropdown-item"
            href="#"
            data-toggle="dropdown" // Use data-toggle to activate the submenu
          >
            Sub Category 2
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Sub-Sub Category 2.1</a></li>
            <li><a className="dropdown-item" href="#">Sub-Sub Category 2.2</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default MenuBar;
