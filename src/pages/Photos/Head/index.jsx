import React from "react";
import { useSearchContext } from "../../../context/SearchContext";
import { Filters } from "./Filters";
import styles from "./styles.module.css";

export const Head = () => {
  const { query } = useSearchContext();

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <div className={styles.results}>
          <span>Results</span>
          <h1>{query}</h1>
        </div>
        <Filters />
      </div>
    </div>
  );
};
