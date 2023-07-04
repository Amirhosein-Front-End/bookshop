import React from "react";

import styles from './PaymentAlert.module.css';

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

const PaymentAlert = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleCheckout = () => {

    navigate("/", { replace: true });
    dispatch({type: "CHECKOUTMODAL"});
    
  }

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.contents}>
          <h2>با موفقیت پرداخت شد.</h2>
        </div>
        <div className={styles.btn}>
          <button onClick={handleCheckout}>تایید</button>
        </div>
      </div>
    </React.Fragment>
    );
}
 
export default PaymentAlert;