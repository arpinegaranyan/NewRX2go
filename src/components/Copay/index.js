import React from "react";
import styles from "./styles.module.scss";
import PropTypes from 'prop-types';
import Wallet from "../../Icons/wallet.svg";


function Copay({amount}) {
    return (
        <div className={styles.Container}>
            <div className={styles.Wallet}>
                <img src={Wallet} alt="wallet"/>
                Copay: {amount} $
            </div>
        </div>

    );
}
Copay.propTypes = {
    amount: PropTypes.number.isRequired
};
export default Copay;
