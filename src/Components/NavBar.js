import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';
function NavBar() {
  return (
    <div>
      <header className={classes.header}>
        <ul className={classes.ul}>
          <li>
            <NavLink to="/" className={classes.navlink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Favorites" className={classes.navlink}>
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink to="About" className={classes.navlink}>
              About
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default NavBar
