

import React, { MouseEventHandler } from 'react';

import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

interface AlertPops{
    message:MouseEventHandler<HTMLButtonElement>;
}



const Alert: React.FC<AlertPops> = ({message}) => {
    const alert = () => toast("Account connected!");
    return (
      <div>
        <button onClick={alert}></button>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <ToastContainer/>
      </div>
    );
  }


export default Alert;