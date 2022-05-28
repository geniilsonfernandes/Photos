import React, { useState } from "react";
import { CheckIcon } from "../../../../icons/Icon";
import { Dropdown, DropdownContext } from "../../../../components/Dropdown";
import styles from "./styles.module.css";
import { colorsFilters, orientationFilters } from "./filters";

const ButtonItem = ({ active, onClick, children, value }) => {
  return (
    <button
      className={`${styles.item} ${active && styles.active}`}
      onClick={() => onClick(value)}
    >
      <span>{active && <CheckIcon />}</span>
      {children}
    </button>
  );
};

export const Filters = () => {
  const [orientation, setOrientation] = useState(orientationFilters[0].name);

  const [haveFilter, setHaveFilter] = useState(false);
  const [color, setColor] = useState("Any color");

  function changeOrientation(value) {
    setOrientation(value);
    setHaveFilter(true);
  }
  function changeColor(value) {
    setColor(value);
  }
  function clear() {
    setHaveFilter(false);
    setOrientation(orientationFilters[0].name);
  }

  return (
    <div className={styles.filters}>
      {haveFilter && (
        <span className={styles.clear} onClick={() => clear()}>
          Clear
        </span>
      )}
      <span>Filters:</span>

      <DropdownContext>
        <Dropdown
          selected={orientation}
          placeholder="Any orientation"
          id="orientation"
        >
          {orientationFilters.map((item) => (
            <ButtonItem
              active={item.name === orientation}
              key={item.id}
              onClick={changeOrientation}
              value={item.name}
            >
              {item.name}
            </ButtonItem>
          ))}
        </Dropdown>
        <Dropdown placeholder="Any colors" id="colors">
          <ButtonItem>
            <CheckIcon /> Any Colors
          </ButtonItem>
          <div className={styles.label}>
            Colors:
            <div className={styles.colors}>
              {colorsFilters.map((color) => (
                <button
                  key={color.code}
                  className={styles.color}
                  style={{ background: color.code }}
                  onClick={() => changeColor(color.code)}
                >
                  <CheckIcon />
                </button>
              ))}
            </div>
          </div>
        </Dropdown>
      </DropdownContext>
    </div>
  );
};
