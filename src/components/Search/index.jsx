import React, { useState } from "react";
import styles from "./styles.module.css";
import { SearchIcon, XisIcon } from "../../icons/Icon";

export const Search = ({ rounded = true, showSugest = false }) => {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  function handlerChange(value) {
    setValue(value);
  }
  function clear() {
    setValue("");
  }
  function setSugest(sugest) {
    setValue(sugest);
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.wrapper__input} ${focus && styles.focus}`}
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

      {showSugest && (
        <span className={styles.luck}>
          Try this:
          <ul>
            <li className={styles.sugest} onClick={() => setSugest("Car")}>
              Car,
            </li>
            <li className={styles.sugest} onClick={() => setSugest("Food")}>
              Food,{" "}
            </li>
            <li className={styles.sugest} onClick={() => setSugest("Travel")}>
              Travel
            </li>
          </ul>
        </span>
      )}
    </div>
  );
};
