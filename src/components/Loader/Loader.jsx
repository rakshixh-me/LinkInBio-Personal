import React from 'react';
import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.loaderMainDiv}>
      <div className={styles.loader}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  )
}

export default Loader
