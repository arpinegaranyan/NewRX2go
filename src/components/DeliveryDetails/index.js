import React from "react";
import styles from "./styles.module.scss";


function DeliveryDetails() {
    return (
        <div className={styles.Container}>
                <div className={styles.Detail}>
                    <span className={styles.Title}>Date to deliver:</span>
                    <span>04/10/2020</span>
                </div>
                <div className={styles.Detail}>
                    <span className={styles.Title}>Promissed ETA:</span>
                    <span>11:00 AM - 04:00 PM</span>
                </div>
                <div className={styles.Detail}>
                    <span className={styles.Title}>Delivery Adress</span>
                    <span><a>2333 East 2nd Street Brooklyn, APT 5A NY 11223</a></span>
                </div>
                <div className={styles.Detail}>
                    <span className={styles.Title}>From</span>
                    <span>NYU Langone Hospital-Cobble Hill</span>
                </div>
        </div>

    );
}

export default DeliveryDetails;
