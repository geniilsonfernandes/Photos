import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownContext,
  DropDownLabel,
} from "../../../../components/Dropdown";
import styles from "./styles.module.css";
import { colorsFilters, orientationFilters } from "./filters";
import { ButtonColor, ButtonItem } from "./FiltersButtons";

export const Filters = () => {
  const [orientationSelected, setOrientationSelected] = useState(null);
  const [colorSelected, setColorSelected] = useState(null);
  const [haveFilter, setHaveFilter] = useState(false);

  function changeOrientation(value) {
    setOrientationSelected(value);
    setHaveFilter(true);
  }
  function changeColor(value) {
    setHaveFilter(true);
    setColorSelected(value);
  }
  function clear() {
    setHaveFilter(false);
    setColorSelected(null);
    setOrientationSelected(null);
  }

  useEffect(() => {
    console.log({
      orientation: orientationSelected,
      color: colorSelected,
    });
  }, [orientationSelected, colorSelected]);

  return (
    <>
      <div className={styles.filters}>
        {haveFilter && (
          <span className={styles.clear} onClick={() => clear()}>
            Clear
          </span>
        )}
        <span>Filters:</span>
        <DropdownContext>
          <Dropdown
            selected={orientationSelected}
            placeholder="Any orientation"
            id="orientation"
          >
            <ButtonItem
              value={null}
              onClick={changeOrientation}
              active={orientationSelected === null}
            >
              Any orientation
            </ButtonItem>
            {orientationFilters.map((item) => (
              <ButtonItem
                key={item.name}
                value={item.value}
                onClick={changeOrientation}
                active={item.value === orientationSelected}
              >
                {item.name}
              </ButtonItem>
            ))}
          </Dropdown>
          <Dropdown
            placeholder="Any colors"
            id="colors"
            selected={colorSelected}
          >
            <ButtonItem
              value={null}
              onClick={changeColor}
              active={colorSelected === null}
            >
              Any orientation
            </ButtonItem>
            <div className={styles.label}>
              Colors:
              <div className={styles.colors}>
                {colorsFilters.map((color) => (
                  <ButtonColor
                    key={color.name}
                    value={color.value}
                    color={color.value}
                    active={colorSelected === color.value}
                    onClick={changeColor}
                  >
                    {color.name}
                  </ButtonColor>
                ))}
              </div>
            </div>
          </Dropdown>
        </DropdownContext>
      </div>
    </>
  );
};
