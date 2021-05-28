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
import DeliveryDetails from "./components/DeliveryDetails";

function App() {
    const [visibilityState, setVisibilityState] = useState({
        showResheduleDeliveryForm : false,
        showConfirmationPopup: false,
        confirmDelivery: false
    })

    const handleShowConfirmationPopup = () => {
        setVisibilityState( prevState => {
            return {
                ...prevState,
                showConfirmationPopup:true,
            }
        } )
    };

    const handleCloseConfirmationPopup = () => {
        setVisibilityState( prevState => {
            return {
                ...prevState,
                showConfirmationPopup:false,
            }
        } )
    };

    const handleShowPage5 = () => {
        setVisibilityState( prevState => {
            return {
                ...prevState,
                confirmDelivery:!prevState.confirmDelivery,
            }
        } )
    };


//open first page ` showSignature = false, showLeaveAtStop = true, showConfirmationPopup = false
//open second page ` showSignature = false,  showConfirmationPopup = true
//open third page ` showSignature = true,  showConfirmationPopup = false


  const showSignature = false;
  const showLeaveAtStop = true;


  return (
      <div className={styles.AppContainer}>
          <div className={styles.Container}>
              {
                  visibilityState.showConfirmationPopup  &&
                  <div className={styles.ConfirmationPopup}>
                      <ConfirmationPopup
                          onCancel={handleCloseConfirmationPopup}
                          onConfirm={handleCloseConfirmationPopup}
                      />
                  </div>
              }

              <div className={styles.Header}>
                  <img src={Logo} alt="logo"/>
                  <img src={Purple} alt="purple"/>
                  <div className={styles.IdContainer}>
                      <div className={styles.Button} onClick={handleShowPage5}>Package out</div>
                      <span className={styles.Id}>#11058553</span>
                  </div>
              </div>
              <div className={styles.Steps}>
                  <Steps/>
              </div>
              <div className={styles.Message}>
                  {
                      showSignature ? "Your signature" : "Confirm delivery to your order:"
                  }

              </div>
              {
                  visibilityState.confirmDelivery &&
                      <div className={styles.SliderContainer}></div>
              }
              {
                  visibilityState.showResheduleDeliveryForm &&
                  <div className={styles.ResheduleDeliveryForm}>
                      <ResheduleDeliveryForm/>
                  </div>
              }
              {
                  !showSignature && !visibilityState.confirmDelivery && <DeliveryDetails />
              }
              <div className={styles.Signature}>
              {
                  (showSignature || showLeaveAtStop) && !visibilityState.showConfirmationPopup && <Signature type={showSignature}/>
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
              {
                  visibilityState.confirmDelivery &&<div className={styles.DetailsWithPadding}><DeliveryDetails /></div>

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
          {
              visibilityState.confirmDelivery &&  <div className={styles.BlurContainer}/>

          }
          <div className={styles.ChatWrapper} onClick={handleShowConfirmationPopup}><Chat count={1}/></div>
      </div>

  );
}

export default App;
