import React from "react";
import { Logo } from "../../icons/Icon";
import Container from "../Layout/Container";
import styles from "./styles.module.css";
import { ToggleTheme } from "../ToggleTheme";
import { Search } from "../Search";
import { Link, useLocation } from "react-router-dom";

export const Navegation = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.wrapper}>
      <Container className={styles.nav}>
        <div className={styles.left}>
          <Link to="/">
            <Logo />
          </Link>

          <span className={styles.divisor}></span>
          <Search />
        </div>
        <div className={styles.right}>
          <ul className={styles.links}>
            <li
              className={`${styles.link} ${pathname === "/" && styles.active}`}
            >
              <Link to="/">Discovery</Link>
            </li>
            <li
              className={`${styles.link} ${
                pathname === "/photos" && styles.active
              }`}
            >
              <a href="photos">My collections</a>
            </li>
          </ul>
          <span className={styles.divisor}></span>
          <ToggleTheme />
        </div>
      </Container>
    </nav>
  );
};
