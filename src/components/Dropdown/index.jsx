import React, {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { DotIcon } from "../../icons/Icon";
import styles from "./styles.module.css";

export const DropdownContext = ({ children }) => {
  const [isOpen, setIsOpen] = useState(null);
  const onToggle = (e) => {
    const id = e.target.getAttribute("data-id");
    id === isOpen ? setIsOpen(null) : setIsOpen(id);
  };
  const close = useCallback(() => {
    setIsOpen(null);
  }, []);

  return Children.map(children, (child) => {
    const newChild = cloneElement(child, {
      isOpen,
      onToggle,
      close,
    });
    return newChild;
  });
};

const Context = ({ children, onClick }) => {
  const dropMenuEl = useRef(null);
  useEffect(() => {
    const outSideClick = (e) => {
      if (
        dropMenuEl.current.previousSibling !== e.target &&
        !dropMenuEl.current.contains(e.target)
      )
        onClick();
    };
    window.addEventListener("click", outSideClick);

    return () => {
      window.removeEventListener("click", outSideClick);
    };
  }, [onClick]);
  return (
    <div className={styles.drop__context} ref={dropMenuEl}>
      {children}
    </div>
  );
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
  const handleClick = (e) => {
    onToggle(e);
  };

  useEffect(() => {
    close();
  }, [close, selected]);

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
      {isOpen === id && <Context onClick={close}>{children}</Context>}
    </div>
  );
};

export const DropDownLabel = ({ children }) => {
  return <button>{children}</button>;
};
