import React from "react";

import PaymentAlert from "./PaymentAlert";
import ClearAlert from "./ClearAlert";

import { Link } from "react-router-dom";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { checkout } from '../../redux/cart/cartActions'

//Styles
import styles from "./CartPage.module.css";

//Mapped Components
import CartPageCard from "./CartPageCard";

//Empty Cart Components
import EmptyCart from "./EmptyCart";

//Functions
//This function moved english number to persion number.
import alterNumber from "../../functions/changeNumberToPersion";

const CartPage = () => {

  const dispatch = useDispatch();
  const { selectedBooks, totalBooksNumber, totalBooksPrice, totalBooksDiscount, totalBooksCost, cartCheckout, cartClear } = useSelector(state => state.cartState);

  const clearBtn = () => {
    dispatch({ type: "CLEAROUTMODAL"});
  };

  const handlePayment = () => {
    dispatch(checkout());
  }

  if (cartCheckout) {
    return (
      <>
        <PaymentAlert />
      </>
    )
  }

  if (cartClear) {
    return (
      <>
        <ClearAlert />
      </>
    )
  }

  if (selectedBooks.length === 0) return <EmptyCart />;

  return (
        <div className={styles.cartpagecontainer}>
          <div className={styles.cartbookinfo}>
            {selectedBooks.map((book) => (
              <CartPageCard
                key={book.id}
                image={book.image}
                name={book.name}
                price={book.price}
                count={book.quantity}
                id={book.id}
                discount={book.discount}
                />
                ))}
          </div>
          <div className={styles.payment}>
            <div className={styles.paymentinfo}>
              <h4>مجموع تعداد محصولات : <span>{alterNumber(String(totalBooksNumber))}</span></h4>
              <h4>جمع کل : <span>{alterNumber(String(totalBooksCost.toLocaleString()))} ریال</span></h4>
              <h4>جمع مبلغ تخفیف خورده : <span>{alterNumber(String(totalBooksDiscount.toLocaleString()))} ریال</span></h4>
              <h4>جمع کل مبلغ قابل پرداخت : <span>{alterNumber(String(totalBooksPrice.toLocaleString()))} ریال</span></h4>
            </div>
            <div className={styles.paymentbtn}>
              <button onClick={handlePayment}>پرداخت</button>
              <Link onClick={clearBtn}>حذف سبد خرید</Link>
            </div>
          </div>
        </div>
  );
};

export default CartPage;
