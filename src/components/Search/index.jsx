import React, { useState } from "react";
import styles from "./styles.module.css";
import { SearchIcon, XisIcon } from "../../icons/Icon";

export const Search = ({ rounded = true }) => {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  function handlerChange(value) {
    setValue(value);
  }
  function clear() {
    setValue("");
  }

  return (
    <div
      className={`${styles.wrapper} ${focus && styles.focus}`}
      data-rounded={rounded}
    >
      <button className={styles.icon}>
        <SearchIcon />
      </button>
      <input
        type="text"
        placeholder="Search here"
        className={styles.input}
        value={value}
        onChange={({ target }) => handlerChange(target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {value && (
        <button
          className={`${styles.icon} ${styles.clear}`}
          onClick={() => clear()}
        >
          <XisIcon />
        </button>
      )}
    </div>
  );
};
