import React from "react";
import mock from "./mock.json";
import styles from "./styles.module.css";
import { LogoWhite } from "../../icons/Icon";
import { Search } from "../Search";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.background}>
        <img src={mock.url} alt="header" />
      </div>
      <div className={styles.intro}>
        <div className={styles.content}>
          <LogoWhite />
          <span className={styles.description}>
            <p>The internet’s source of freely-usable images.</p>
            <p>Powered by creators everywhere.</p>
          </span>
          <Search rounded={false} />
        </div>
      </div>
    </header>
  );
};
