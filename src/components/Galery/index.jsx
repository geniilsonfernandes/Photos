import React from "react";
import Container from "../Layout/Container";
import styles from "./styles.module.css";
import Masonry from "react-masonry-css";
import { CardPhoto } from "../CardPhoto";
import { Skeleton } from "../Skeleton";
const ghost = [1, 2, 3, 4, 5, 6, 7, 8];
export const Galery = ({ data = false, loading }) => {
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
        {loading &&
          ghost.map((ghost) => (
            <Skeleton key={ghost} height={"300px"} width="100%" />
          ))}
        {data &&
          data.map((photo) => <CardPhoto key={photo.id} photo={photo} />)}
        {data && data.length === 0 && <span> no results </span>}
      </Masonry>
    </Container>
  );
};
