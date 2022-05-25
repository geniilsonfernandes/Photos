import React from "react";
import Container from "../Layout/Container";
import styles from "./styles.module.css";

import Masonry from "react-masonry-css";

export const Galery = ({ data = false }) => {
  const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    768: 2,
    400: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.grid}
        columnClassName={styles.grid_column}
      >
        {!data && "no results"}
        {data &&
          data.map((photo) => (
            <div>
              <img
                src={
                  photo.src.original + "?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
                alt={photo.url}
                key={photo.id}
              />
            </div>
          ))}
      </Masonry>
    </Container>
  );
};