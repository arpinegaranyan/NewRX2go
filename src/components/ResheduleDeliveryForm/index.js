import React from "react";
import styles from "./styles.module.scss";
import PropTypes from 'prop-types';


function ResheduleDeliveryForm() {
    return (
        <div className={styles.Container}>
            <div>
                <span>Select Date</span>
                <div></div>
            </div>
            <div>
                <span>Select Time</span>
                <div></div>
            </div>
            <div>
                <span>Street Adress</span>
                <div></div>
            </div>
            <div>
                <div>
                    <span>ZIP</span>
                    <div></div>
                </div>
                <div>
                    <span>City</span>
                    <div></div>
                </div>

            </div>
            <div>
                <div>
                    <span>State</span>
                    <div></div>
                </div>
                <div>
                    <span>APT</span>
                    <div></div>
                </div>
            </div>
        </div>

    );
}

export default ResheduleDeliveryForm;
