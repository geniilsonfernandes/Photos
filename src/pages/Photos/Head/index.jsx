import React, { useState } from "react";
import { DotIcon } from "../../../icons/Icon";
import styles from "./styles.module.css";

export const Head = () => {
  const [dropMenuActive, setDropMenuActive] = useState(null);

  function toggle(i) {
    if (dropMenuActive === i) {
      return setDropMenuActive(null);
    }
    setDropMenuActive(i);
  }


  

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <div className={styles.results}>
          <span>Results</span>
          <h1>Car</h1>
        </div>
        <div className={styles.filters}>
          <span>Filters:</span>
          <div className={styles.drop__menu}>
            <button className={styles.drop__button} onClick={() => toggle(1)}>
              Any orientation <DotIcon />
            </button>
            {dropMenuActive === 1 && (
              <div className={styles.menu}>
                <ul>
                  <li className={styles.item}>Any orientation</li>
                  <li className={styles.item}>Landscape</li>
                  <li className={styles.item}>Portrait</li>
                  <li className={styles.item}>Square</li>
                </ul>
              </div>
            )}
          </div>
          <div className={styles.drop__menu}>
            <button className={styles.drop__button} onClick={() => toggle(2)}>
              Any colors <DotIcon />
            </button>
            {dropMenuActive === 2 && (
              <div className={styles.menu}>
                <ul>
                  <li className={styles.item}>Any orientation</li>
                  <li className={styles.item}>Landscape</li>
                  <li className={styles.item}>Portrait</li>
                  <li className={styles.item}>Square</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
