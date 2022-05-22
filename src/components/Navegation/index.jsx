import React from "react";
import { Logo } from "../../icons/Icon";
import Container from "../Layout/Container";
import styles from "./styles.module.css";
import { ToggleTheme } from "../ToggleTheme";

export const Navegation = () => {
  return (
    <nav className={styles.wrapper}>
      <Container className={styles.nav}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <ul className={styles.links}>
            <li className={`${styles.link} ${true && styles.active}`}>
              Discovery
            </li>
            <li className={`${styles.link} ${false && styles.active}`}>
              My collections
            </li>
          </ul>
          <span className={styles.divisor}></span>
          <ToggleTheme />
        </div>
      </Container>
    </nav>
  );
};