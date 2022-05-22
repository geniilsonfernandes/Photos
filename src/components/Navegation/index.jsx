import React from "react";
import { Logo } from "../../icons/Icon";
import Container from "../Layout/Container";
import styles from "./styles.module.css";
import { ToggleTheme } from "../ToggleTheme";
import { Search } from "../Search";

export const Navegation = () => {
  return (
    <nav className={styles.wrapper}>
      <Container className={styles.nav}>
        <div className={styles.left}>
          <Logo />
          <span className={styles.divisor}></span>
          <Search />
        </div>
        <div className={styles.right}>
          <ul className={styles.links}>
            <li className={`${styles.link} ${true && styles.active}`}>
              <a href="/">Discovery</a>
            </li>
            <li className={`${styles.link} ${false && styles.active}`}>
              <a href="/">My collections</a>
            </li>
          </ul>
          <span className={styles.divisor}></span>
          <ToggleTheme />
        </div>
      </Container>
    </nav>
  );
};
