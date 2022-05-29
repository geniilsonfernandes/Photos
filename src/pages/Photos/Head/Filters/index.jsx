import React, { useEffect, useState } from "react";
import { Dropdown, DropdownContext } from "../../../../components/Dropdown";
import { useSearchContext } from "../../../../context/SearchContext.js";
import styles from "./styles.module.css";
import { colorsFilters, orientationFilters } from "./filters";
import { ButtonColor, ButtonItem } from "./FiltersButtons";

export const Filters = () => {
  const { setOrientation, setColor, setFilter, filters } = useSearchContext();
  const [orientationSelected, setOrientationSelected] = useState(null);
  const [colorSelected, setColorSelected] = useState(null);

  // filters selectrs
  function changeOrientation(value) {
    setOrientationSelected(value);
    setOrientation(value);
  }
  function changeColor(value) {
    setColor(value);
    setColorSelected(value);
  }
  // clers filters
  function clear() {
    setFilter(null);
    setColorSelected(null);
    setOrientationSelected(null);
  }

  useEffect(() => {
    orientationSelected !== null || colorSelected !== null
      ? setFilter(true)
      : setFilter(false);
  }, [orientationSelected, colorSelected, setFilter]);

  return (
    <>
      <div className={styles.filters}>
        {filters && (
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
