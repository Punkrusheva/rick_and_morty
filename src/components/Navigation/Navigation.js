import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import routes from "../../routes";

export default function Navigation() {

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