import React from "react";

import styles from './ClearAlert.module.css';

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

const ClearAlert = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleCheckout = async () => {

    navigate("/", { replace: true });
    dispatch({type: "CLEAR"});
    
  };

  const handleCancel = () => {
    dispatch({ type: "CANCELCLEAR" })
  }

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.contents}>
          <h2>آیا از حذف کامل سبد خرید اطمینان دارید ؟</h2>
        </div>
        <div className={styles.btn}>
          <button onClick={handleCheckout} className={styles.yes}>بله</button>
          <button onClick={handleCancel} className={styles.no}>خیر</button>
        </div>
      </div>
      
    </React.Fragment>
    );
}
 
export default ClearAlert;