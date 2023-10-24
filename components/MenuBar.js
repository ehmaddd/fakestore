import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuBar = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="dropdown">
      <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Categories
      </a>
      <ul className="dropdown-menu">
        <li>
          <div className="btn-group dropend">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              First Link
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>
          </div>
        </li>
        <li>
          <div className="btn-group dropend">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Second Link
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>
          </div>
        </li>
        <li>
          <div className="btn-group dropend">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Third Link
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
