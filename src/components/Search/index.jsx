import React, { useState } from "react";
import styles from "./styles.module.css";
import { SearchIcon, XisIcon } from "../../icons/Icon";
import { useSearchContext } from "../../context/SearchContext";

export const Search = ({ rounded = true, showSugest = false }) => {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  const { searchPhoto } = useSearchContext();

  function handlerChange(value) {
    setValue(value);
  }
  function clear() {
    setValue("");
  }
  function setSugest(sugest) {
    searchPhoto(sugest);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value !== "") searchPhoto(value);
  };

  return (
    <div className={styles.wrapper}>
      <form
        onSubmit={handleSubmit}
        className={`${styles.wrapper__input} ${focus && styles.focus}`}
        data-rounded={rounded}
      >
        <button className={styles.icon} type="submit">
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
          required
        />
        {value && (
          <button
            className={`${styles.icon} ${styles.clear}`}
            onClick={() => clear()}
          >
            <XisIcon />
          </button>
        )}
      </form>
      {showSugest && (
        <span className={styles.luck}>
          Try this:
          <ul>
            <li className={styles.sugest} onClick={() => setSugest("car")}>
              Car,
            </li>
            <li className={styles.sugest} onClick={() => setSugest("food")}>
              Food,{" "}
            </li>
            <li className={styles.sugest} onClick={() => setSugest("travel")}>
              Travel
            </li>
          </ul>
        </span>
      )}
    </div>
  );
};
