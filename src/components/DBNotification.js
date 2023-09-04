import React from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DBNotification = ({ setDisplayPopUp }) => {
  // // when pop-up is closed this function triggers, we pass it to 'onClose' property of the modal
  // const closePopUp = () => {
  //   // setting key "seenPopUp" with value true into localStorage
  //   localStorage.setItem('seenPopUp', true);
  //   // setting state to false to not display pop-up
  //   setDisplayPopUp(false);
  // };

  useEffect(() => {
    toast.info('DB needs time to wake up! It may take 30 seconds to use.', {
      position: toast.POSITION.TOP_CENTER,
      closeButton: true,
      timeOut: 3000,
      progressBar: true,
      allowHtml: true,
    });
  }, []);

  return (
    <div>
      {/* <button onClick={showToastMessage}>Notify</button> */}
      <ToastContainer />
    </div>
  );
};

export default DBNotification;
