import React from "react";
import styles from "./styles.module.scss";


function ConfirmationPopup({onConfirm, onCancel}) {
    return (
        <div className={styles.Container}>
            <div className={styles.Text}>
                Do you want that driver will leave your package near the door?
            </div>
            <div className={styles.Buttons}>
                <div className={styles.NoButton} onClick={onCancel}>No</div>
                <div className={styles.YesButton} onClick={onConfirm}>Yes</div>
            </div>
        </div>

    );
}

export default ConfirmationPopup;
