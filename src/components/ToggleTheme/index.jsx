import React, { useState } from "react";
import Icon from "./Icon";
import styles from "./styles.module.css";

export const ToggleTheme = () => {
  const [toggle, setToggle] = useState();

  const handlerClick = () => {
    setToggle((t) => !t);
  };
  
  return (
    <button className={styles.button} onClick={() => handlerClick()}>
      Theme
      <Icon toggle={toggle} />
    </button>
  );
};
