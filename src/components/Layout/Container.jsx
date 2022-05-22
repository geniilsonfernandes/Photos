import React from "react";
import styles from "./styles.module.css";

const Container = ({ wrapper, children, className }) => {
  const HtmlNode = wrapper || "div";
  return (
    <HtmlNode className={`${styles.container} ${className}`}>
      {children}
    </HtmlNode>
  );
};

export default Container;
