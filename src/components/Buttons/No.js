import React from "react";
import styles from "./styles.module.scss";


function No({onClick}) {
    return (
        <div onClick={onClick} className={styles.No}>No</div>
    );
}

export default No;