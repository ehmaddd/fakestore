import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/components/MenuBar.css'

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
      <a class="dropdown-item" href="#">Development &raquo;</a>
      <ul class="dropdown-menu dropdown-submenu">
        <li>
          <a class="dropdown-item" href="#">Web Development &raquo;</a>
          <ul class="dropdown-menu dropdown-submenu">
            <li>
              <a class="dropdown-item" href="#">JavaScript</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">React JS</a>
            </li>

          </ul>
        </li>
        <li>
          <a class="dropdown-item" href="#">Data Science &raquo;</a>
          <ul class="dropdown-menu dropdown-submenu">
            <li>
              <a class="dropdown-item" href="#">Python</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Machine Learning</a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
  );
};

export default MenuBar;
