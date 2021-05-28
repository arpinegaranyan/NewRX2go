import React from "react";
import styles from "./styles.module.scss";
import Sig1 from "../../Icons/Signature1.svg";
import Sig2 from "../../Icons/Signature2.svg";


function Signature({type}) {
const icon = type  ? Sig2 : Sig1
const alt = type  ? "Sig2" : "Sig1"
const title = type  ? "Face to face delivery":"Can leave at Stop"
    const text = type  ? <div className={styles.Text}>The prescription will be delivered to the <span> assigned patient only </span>. ID and Signature required, picture of the ID will be taken upon the delivery.</div>
    :<div className={styles.Text}><span> Only if signed</span>. Signature is required. We will not deliver the package unless the recipient <span> signs for it online </span> or in person.</div>
    return (
        <div className={styles.Container}>

            <div className={styles.IconAndText}>
                <div className={styles.Icon}>
                    <img src={icon} alt={alt}/>
                </div>
                <div className={styles.TextWrapper}>
                    <div className={styles.Title}>{title}</div>
                    {text}
                </div>

            </div>
        </div>
    );
}

export default Signature;