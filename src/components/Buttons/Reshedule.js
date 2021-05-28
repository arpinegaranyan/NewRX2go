import React from "react";
import styles from "./styles.module.scss";


function Reshedule({onClick}) {
    return (
      <div onClick={onClick} className={styles.Reshedule}>Reshedule delivery</div>
    );
}

export default Reshedule;
