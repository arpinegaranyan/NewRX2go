import React from "react";
import styles from "./styles.module.scss";


function Yes({onClick}) {
    return (
        <div onClick={onClick} className={styles.Yes}>Yes</div>
    );
}

export default Yes;