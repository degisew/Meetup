import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import {AiFillCloseCircle} from 'react-icons/ai'
import classes from './NavBar.module.css';
import logo from '../assets/images/meetup.png';
import menu from '../assets/images/menu.png';
function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuHandler = () => {
    setToggleMenu(!toggleMenu);
  }
  const closeMenuHandler = () => {
   setToggleMenu(false);
  }
  let toggleMenuItemDiv;
  let menuItem = (
    <ul className={classes.mobileUl}>
      <li>
        <NavLink
          to="/"
          className={classes.mobilNavlink}
          onClick={closeMenuHandler}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Add"
          className={classes.mobilNavlink}
          onClick={closeMenuHandler}
        >
          Add New Meetup
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Favorites"
          className={classes.mobilNavlink}
          onClick={closeMenuHandler}
        >
          Favorites
        </NavLink>
      </li>
      {/* <li>
               <NavLink to="About" className={classes.navlink}>
                 About
               </NavLink>
             </li> */}
    </ul>
  );
  if(toggleMenu) {
    toggleMenuItemDiv = (
      <div className={classes.mobileMenuArea}>
        <button onClick={closeMenuHandler}><AiFillCloseCircle/></button>
        {menuItem}
      </div>
    );
  }
  return (
    <section>
      {toggleMenuItemDiv}
      <header className={classes.header}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <ul className={classes.ul}>
          <li>
            <NavLink to="/" className={classes.navlink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Add" className={classes.navlink}>
              Add New Meetup
            </NavLink>
          </li>
          <li>
            <NavLink to="/Favorites" className={classes.navlink}>
              Favorites
            </NavLink>
          </li>
          {/* <li>
               <NavLink to="About" className={classes.navlink}>
                 About
               </NavLink>
             </li> */}
        </ul>
        <div className={classes.menuDiv}>
          <button onClick={menuHandler}>
            <img src={menu} alt="mobileMenu" className={classes.menuIcon} />
          </button>
        </div>
      </header>
    </section>
  );
  }
export default NavBar
