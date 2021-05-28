import React from "react";
import styles from "./styles.module.scss";


function Back({onClick}) {
    return (
        <div onClick={onClick} className={styles.Back}>Back</div>
    );
}

export default Back;