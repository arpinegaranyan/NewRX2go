import React from "react";
import styles from "./styles.module.scss";
import Sig1 from "../../Icons/Signature1.svg";
import Sig2 from "../../Icons/Signature2.svg";


function Signature({type}) {
const icon = type === "leaveAtStop" ? Sig1 : Sig2
const alt = type === "leaveAtStop" ? "Sig1" : "Sig2"
const title = type === "leaveAtStop" ? "Can leave at Stop" : "Face to face delivery"
    const text = type === "leaveAtStop" ? <div className={styles.Text}><span> Only if signed</span>. Signature is required. We will not deliver the package unless the recipient <span> signs for it online </span> or in person.</div>
        :<div className={styles.Text}>The prescription will be delivered to the <span> assigned patient only </span>. ID and Signature required, picture of the ID will be taken upon the delivery.</div>
    return (
        <div className={styles.Container}>
            <div className={styles.Title}>{title}</div>
            <div className={styles.IconAndText}>
                <img src={icon} alt={alt}/>
               {text}
            </div>
        </div>
    );
}

export default Signature;