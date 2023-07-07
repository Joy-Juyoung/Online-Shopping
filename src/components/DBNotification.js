import React from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DBNotification = () => {
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
