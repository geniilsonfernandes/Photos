import React from "react";
import styles from "./styles.module.css";
export const Skeleton = ({ width, height }) => {
  return (
    <div
      className={styles.loading}
      style={{ width: width, height: height }}
    ></div>
  );
};
