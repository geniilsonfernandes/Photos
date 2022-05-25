import React from "react";
import styles from "./styles.module.css";

export const GaleryTabs = ({ tabs, tabActive, changerTabActive }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.tabs}>
        {tabs.map((tab) => (
          <li
            className={`${styles.tab} ${
              tab.id === tabActive ? styles.active : ""
            }`}
            key={tab.id}
            onClick={() => changerTabActive(tab.id)}
          >
            {tab.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
