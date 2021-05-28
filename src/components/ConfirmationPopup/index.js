import React from "react";
import YesButton from "../Buttons/Yes";
import NoButton from "../Buttons/No";
import styles from "./styles.module.scss";


function ConfirmationPopup({onConfirm, onCancel}) {
    return (
        <div className={styles.Container}>
            <div className={styles.Text}>
                Do you want that driver will leave your package near the door?
            </div>
            <div className={styles.Buttons}>
                <div><NoButton onClick={onCancel}/></div>
                <div className={styles.YesButton} ><YesButton onClick={onConfirm}/></div>
            </div>
        </div>

    );
}

export default ConfirmationPopup;
