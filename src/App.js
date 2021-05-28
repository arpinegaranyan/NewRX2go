import React ,{useState} from "react";
import styles from "./styles.module.scss";
import Logo from "./Icons/Logo.svg"
import Download from "./Icons/download.svg"
import Purple from "./Icons/purple.png"
import Chat from "./components/ChatIcon/Chat";
import Copay from "./components/Copay";
import Instructions from "./components/Instructions";
import Signature from "./components/Signature";
import Steps from "./components/Steps";
import ConfirmationPopup from "./components/ConfirmationPopup"
import SignHere from "./components/SignHere";
import ResheduleDeliveryForm from "./components/ResheduleDeliveryForm";
import ResheduleButton from "./components/Buttons/Reshedule";
import ConfirmButton from "./components/Buttons/Confirm";
import BackButton from "./components/Buttons/Back";

function App() {
    const [visibilityState, setVisibilityState] = useState({
        showResheduleDeliveryForm : false
    })

//open first page ` showSignature = false, showLeaveAtStop = true, showConfirmationPopup = false
//open second page ` showSignature = false,  showConfirmationPopup = true
//open third page ` showSignature = true,  showConfirmationPopup = false


  const showSignature = false;
  const showLeaveAtStop = true;
  const showConfirmationPopup = false; // make true and showSignature = false  to open 2-nd page


  return (
      <div className={styles.AppContainer}>
          <div className={styles.Container}>
              {
                  showConfirmationPopup  &&
                  <div className={styles.ConfirmationPopup}>
                      <ConfirmationPopup/>
                  </div>
              }

              <div className={styles.Header}>
                  <img src={Logo} alt="logo"/>
                  <img src={Purple} alt="purple"/>
                  <div className={styles.IdContainer}>
                      <div className={styles.Button} onClick={null}>Package out</div>
                      <span className={styles.Id}>#11058553</span>
                  </div>
              </div>
              <div className={styles.Steps}>
                  <Steps/>
              </div>
              <div className={styles.Message}>
                  {
                      showSignature ? "Your signature" : "Confirm delivery to your order"
                  }

              </div>
              {
                  visibilityState.showResheduleDeliveryForm &&
                  <div className={styles.ResheduleDeliveryForm}>
                      <ResheduleDeliveryForm/>
                  </div>
              }
              {
                  !showSignature &&   <div className={styles.DeliveryDetails}>
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
              }
              <div className={styles.Signature}>
              {
                  (showSignature || showLeaveAtStop) && !showConfirmationPopup && <Signature type={showSignature}/>
              }
              </div>
              {
                  ! showSignature &&
                       <>
                            <span className={styles.InsText}>Instruction</span>
                            <div className={styles.InstructionsContainer}><Instructions/></div>
                           <div className={styles.CopayContainer}><Copay amount={138}/></div>
                       </>
              }
              {
                  showSignature && <div className={styles.SignHere}><SignHere/></div>

              }
              <div className={styles.Footer}>
                  <div className={styles.LeftButton}>
                     {
                         showSignature ?  <BackButton onClick={null}/> : <ResheduleButton onClick={null}/>
                     }
                  </div>
                  <ConfirmButton onClick={null}/>
              </div>
          </div>
          <div className={styles.ChatWrapper}><Chat count={1}/></div>
      </div>

  );
}

export default App;
