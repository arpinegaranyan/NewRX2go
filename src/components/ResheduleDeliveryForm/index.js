import React, {useState} from "react";
import styles from "./styles.module.scss";
import CalendarSVG from "../../Icons/calendar.svg";


function ResheduleDeliveryForm() {
    const [id, setActiveId] = useState("");

    const selectTime = (id) => {
        setActiveId(id);
    }
    return (
           <div className={styles.Container}>
               <div className={styles.RowDate}>
                   <span className={styles.Title}>Select Date</span>
                   <div className={styles.DateInputContainer}>
                       <input className={styles.Input} type="date" name="selected_date"/>
                       <span className={styles.OpenButton}>
                          <button type="button"><img src={CalendarSVG} alt="calendar" /></button>
                       </span>
                   </div>
               </div>
               <div className={styles.Row}>
                   <span className={styles.Title}>Select Time</span>
                   <div className={styles.TimeWrapper}>
                       <div onClick={() => selectTime("1")} className={id === "1" ? styles.Active: ""}>
                           9 AM - 1 PM
                       </div>
                       <div onClick={() => selectTime("2")} className={id === "2" ? styles.Active: ""}>
                           1 PM - 5 PM
                       </div>
                       <div onClick={() => selectTime("3")} className={id === "3" ? styles.Active: ""}>
                           5 PM - 9 PM
                       </div>
                   </div>
               </div>
               <div className={styles.Row}>
                   <span className={styles.Title}>Street Address</span>
                   <div className={styles.Address}>
                       <input className={styles.Input}  name="address" placeholder="Address" />
                   </div>
               </div>
               <div className={styles.ZipAndCityContainer}>
                   <div>
                       <span className={styles.Title}>ZIP</span>

                           <input className={styles.Input}  name="zip" placeholder="ZIP"/>
                   </div>
                   <div>
                       <span className={styles.Title}>City</span>
                           <input className={styles.Input}  name="city" placeholder="City"/>
                   </div>
               </div>
               <div className={styles.StateAndArtCtainer}>
                   <div>
                       <span className={styles.Title}>State</span>
                           <input className={styles.Input}  name="state" placeholder="State"/>
                   </div>
                   <div>
                       <span className={styles.Title}>Apt</span>
                           <input className={styles.Input}  name="apt" placeholder="APT"/>
                   </div>
               </div>
           </div>
    );
}

export default ResheduleDeliveryForm;
