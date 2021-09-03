import React from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={styles.headerMenu}>
      <Navigation />
      <img className={styles.title} src='https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_logo.png' alt='logo'/>
  </header>
  );
};