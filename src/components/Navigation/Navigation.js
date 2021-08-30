import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import routes from "../../routes";
//import { useSelector } from 'react-redux';
//import { authSelectors } from '../../redux/auth';

export default function Navigation() {
  //const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
  <ul className={styles.navMenu}>
      <li className={styles.headerMenuItem}>
      <NavLink exact to={routes.characters}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}>Characters</NavLink>
      </li>
      <li className={styles.headerMenuItem}>
      <NavLink exact to={routes.episodes}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}>Episodes</NavLink>
      </li>
      <li className={styles.headerMenuItem}>
      <NavLink exact to={routes.locations}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}>Locations</NavLink>
      </li>
      <li className={styles.headerMenuItem}>
      <NavLink exact to={routes.myWatchList}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}>My watch list</NavLink>
      </li>
    </ul>
  );
};