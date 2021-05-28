import React from "react";
import styles from "./styles.module.scss";


function Confirm({onClick}) {
    return (
        <div onClick={onClick} className={styles.Confirm}>Confirm</div>
    );
}

export default Confirm;
