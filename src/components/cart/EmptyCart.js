import React from 'react';

import { Link } from 'react-router-dom';

//Styles
import styles from './EmptyCart.module.css';

import Footer from '../footer/Footer';

//Image
import cartImg from '../../image/empty-basket.webp';

const EmptyCart = () => {
  return (
    <>
      <div className={styles.emptycartcontainer}>
        <div className={styles.container}>
          <div>
            <p>متاسفانه سبد خرید شما خالیست!</p>
          </div>
          <div>
            <img src={cartImg} alt='cartimg' />
          </div>
          <div>
            <Link to='/books'>ثبت نام و خرید کتاب</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
 
export default EmptyCart;