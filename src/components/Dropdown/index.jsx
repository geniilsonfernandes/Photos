import React, { Children, cloneElement, useEffect, useState } from "react";
import { DotIcon } from "../../icons/Icon";
import styles from "./styles.module.css";

export const DropdownContext = ({ children }) => {
  const [isOpen, setIsOpen] = useState(null);
  const onToggle = (e) => {
    const id = e.target.getAttribute("data-id");
    id === isOpen ? setIsOpen(null) : setIsOpen(id);
  };
  const close = () => {
    setIsOpen(null);
  };
  return Children.map(children, (child) => {
    console.log(child);
    const newChild = cloneElement(child, {
      isOpen,
      onToggle,
      close,
    });
    return newChild;
  });
};

export const Dropdown = ({
  children,
  selected,
  placeholder,
  isOpen,
  onToggle,
  id,
  close,
}) => {
  useEffect(() => {}, []);

  const handleClick = (e) => {
    onToggle(e);
  };

  useEffect(()=>{
    
  })


  return (
    <div className={styles.drop__menu}>
      <button
        className={styles.drop__button}
        onClick={(e) => handleClick(e)}
        data-context-active={isOpen === id}
        data-id={id}
      >
        {selected ? selected : placeholder} <DotIcon />
      </button>
      {isOpen === id && (
        <div className={styles.drop__context} onClick={() => close()}>
          {children}
        </div>
      )}
    </div>
  );
};
