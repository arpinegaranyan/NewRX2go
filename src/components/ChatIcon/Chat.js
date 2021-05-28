import React from "react";
import styles from "./styles.module.scss";
import VectorSVG from "../../Icons/Vector.svg"
import PropTypes from 'prop-types';



function Chat({count}) {
    return (
        <div className={styles.Container}>
            <div className={styles.CountContainer}>+{count}</div>
            <div className={styles.Chat}>
                <img src={VectorSVG} alt="vector"/>
            </div>
        </div>

    );
}

Chat.propTypes = {
    count: PropTypes.element.isRequired
};

export default Chat;
