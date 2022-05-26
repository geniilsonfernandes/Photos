import React from "react";
import Container from "../Layout/Container";
import styles from "./styles.module.css";

import Masonry from "react-masonry-css";
import { CardPhoto } from "../CardPhoto";

export const Galery = ({ data = false }) => {
  const breakpointColumnsObj = {
    default: 4,
    1024: 4,
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
          data.map((photo) => <CardPhoto key={photo.id} photo={photo} />)}
      </Masonry>
    </Container>
  );
};

/* <img
  src={photo.src.original + "?auto=compress&cs=tinysrgb&dpr=1&w=500"}
  alt={photo.url}
/>; */
