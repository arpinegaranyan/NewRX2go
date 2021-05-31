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
        confirmDelivery: false,
        showSignature:false
    })

    const handleShowConfirmationPopup = () => {
        setVisibilityState( prevState => {
            return {
                ...prevState,
                showResheduleDeliveryForm:false,
                showConfirmationPopup:true,
                confirmDelivery:false,
                showSignature:false

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
                showResheduleDeliveryForm:false,
                confirmDelivery:!prevState.confirmDelivery,
                showSignature:false,
                showConfirmationPopup:false
            }
        } )
    };

    const handleShowPage3 = () => {
        setVisibilityState( prevState => {
            return {
                ...prevState,
                showResheduleDeliveryForm:false,
                showSignature:!prevState.showSignature,
                showConfirmationPopup:false,
                confirmDelivery:false
            }
        } )
    };
    const handleResheduleDelivery = () => {
        setVisibilityState( prevState => {
            return {
                ...prevState,
                showResheduleDeliveryForm:true,
                showConfirmationPopup: false,
                confirmDelivery: false,
                showSignature:false
            }
        } )
    };
    const handleConfirm = () => {
        setVisibilityState( prevState => {
            return {
                ...prevState,
                showResheduleDeliveryForm:!prevState.showResheduleDeliveryForm,
                showConfirmationPopup: false,
                confirmDelivery: false,
                showSignature:false
            }
        } )
    };




  const showSignature = true;
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

              <div className={styles.Header} >
                  <img src={Logo} alt="logo"/>
                  <img src={Purple} alt="purple"/>
                  <div className={styles.IdContainer}>
                      <div className={styles.Button} onClick={handleShowPage5}>Package out</div>
                      <span className={styles.Id}>#11058553</span>
                  </div>
              </div>
              {
                  !visibilityState.showResheduleDeliveryForm &&
                  <div className={styles.Steps}>
                      <Steps/>
                  </div>
              }

              <div className={styles.Message}>
                  {
                      visibilityState.showSignature ? "Your signature" : visibilityState.showResheduleDeliveryForm ? "Reshedule delivery": "Confirm delivery to your order:"
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
                  !visibilityState.showResheduleDeliveryForm && !visibilityState.showSignature && !visibilityState.confirmDelivery && <DeliveryDetails />
              }
              {
                  !visibilityState.showResheduleDeliveryForm &&
                  <div className={styles.Signature}>
                      {
                          (visibilityState.showSignature || showLeaveAtStop) && !visibilityState.showConfirmationPopup  && <Signature type={visibilityState.showSignature}/>
                      }
                  </div>
              }

              {
                  ! visibilityState.showSignature &&
                       <>
                            <span className={styles.InsText}>Instruction</span>
                            <div className={styles.InstructionsContainer}><Instructions/></div>
                           <div className={styles.CopayContainer}><Copay amount={138}/></div>
                       </>
              }
              {
                  visibilityState.showSignature && <div className={styles.SignHere}><SignHere/></div>

              }
              {
                  visibilityState.confirmDelivery &&<div className={styles.DetailsWithPadding}><DeliveryDetails /></div>

              }
              <div className={styles.Footer}>
                  <div className={styles.LeftButton}>
                     {
                         visibilityState.showSignature ?  <BackButton onClick={null}/> : <ResheduleButton onClick={handleResheduleDelivery}/>
                     }
                  </div>
                  <ConfirmButton onClick={handleShowPage3}/>
              </div>

              {
                 visibilityState.showResheduleDeliveryForm &&  <div className={styles.Empty}/>

              }
          </div>
          {
              visibilityState.confirmDelivery || visibilityState.showResheduleDeliveryForm &&  <div className={styles.BlurContainer}/>

          }
          <div className={styles.ChatWrapper} onClick={handleShowConfirmationPopup}><Chat count={1}/></div>
      </div>

  );
}

export default App;
