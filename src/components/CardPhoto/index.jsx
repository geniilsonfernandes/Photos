import React, { useState } from "react";
import { DownloadIcon, LikeIcon } from "../../icons/Icon";
import styles from "./styles.module.css";

export const CardPhoto = ({ photo, loading }) => {
  const [showActions, setShowActions] = useState(false);
  if (loading) {
    return <div className={styles.loading}></div>;
  } else {
    return (
      <div
        className={styles.wrapper}
        onMouseOver={() => setShowActions(true)}
        onMouseLeave={() => {
          setShowActions(false);
        }}
      >
        {showActions && (
          <div className={styles.actions}>
            <button className={styles.action}>
              <LikeIcon />
            </button>
            <button className={styles.action}>
              <DownloadIcon />
            </button>
          </div>
        )}
        <img
          src={photo.src.original + "?auto=compress&cs=tinysrgb&dpr=1&w=500"}
          alt={photo.url}
          className={styles.photo}
        />
        {showActions && (
          <span className={styles.user}>{photo.photographer}</span>
        )}
      </div>
    );
  }
};
