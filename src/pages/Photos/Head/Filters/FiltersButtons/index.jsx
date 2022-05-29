import { CheckIcon } from "../../../../../icons/Icon";

import styles from "./styles.module.css";

export const ButtonItem = ({ active, onClick, children, value }) => {
  const handleClick = () => {
    if (onClick) onClick(value);
  };
  return (
    <button
      className={`${styles.drop__Button} ${active && styles.active}`}
      onClick={() => handleClick()}
      disabled={active}
    >
      <span>{active && <CheckIcon />}</span>
      {children}
    </button>
  );
};

export const ButtonColor = ({ color, value, active, onClick }) => {
  const handleClick = () => {
    if (onClick) onClick(value);
  };

  return (
    <button
      className={styles.color}
      style={{ background: color }}
      onClick={() => handleClick()}
      disabled={active}
    >
      {active && <CheckIcon />}
    </button>
  );
};
