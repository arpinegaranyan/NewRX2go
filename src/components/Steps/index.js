import React from "react";
import styles from "./styles.module.scss";
import Bus from "../../Icons/bus.svg";
import Wallet from "../../Icons/mini_wallet.svg";
import Map from "../../Icons/map.svg";
import Sign from "../../Icons/sign.svg";



function Steps() {
    const backgroundColor = "#1587A0";
    const activeBackgroundColor = "#16B45E";
    const boxShadow = "inset -4px -4px 8px rgba(38, 203, 74, 0.58), inset -2px 4px 8px #1C99DF, inset -4px -2px 8px #245CEC";
    const activeBoxShadow = "inset -4px -4px 8px rgba(38, 203, 74, 0.58), inset -2px 4px 8px #48F8D8, inset -4px -2px 8px #245CEC";
    return (
        <div className={styles.Container}>
            <div className={styles.Line}/>
            <div className={styles.CircleWrapper}>
                <div className={styles.Check}>
                    <span className={styles.CheckSign}/>
                </div>
                <div className={styles.Circle} style={{background:activeBackgroundColor, boxShadow:activeBoxShadow}}>
                    <img src={Bus} alt="bus"/>
                </div>
            </div>
            <div className={styles.CircleWrapper}>
                <div className={styles.Check}>
                    <span className={styles.CheckSign}/>
                </div>
                <div className={styles.Circle} style={{background:activeBackgroundColor, boxShadow:activeBoxShadow}}>
                    <img src={Sign} alt="sign"/>
                </div>
            </div>
            <div className={styles.CircleWrapper}>
                {/*<div className={styles.Check}>*/}
                {/*    <span className={styles.CheckSign}/>*/}
                {/*</div>*/}
                <div className={styles.Circle} style={{background:backgroundColor, boxShadow}}>
                    <img src={Map} alt="map"/>
                </div>
            </div>
            <div className={styles.CircleWrapper}>
                {/*<div className={styles.Check}>*/}
                {/*    <span className={styles.CheckSign}/>*/}
                {/*</div>*/}
                <div className={styles.Circle} style={{background:backgroundColor, boxShadow}}>
                    <img src={Wallet} alt="wallet"/>
                </div>
            </div>
        </div>

    );
}
Steps.propTypes = {
};
export default Steps;
