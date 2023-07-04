import React from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./SlidersBook.module.css";
import "../../styles/grid.css";

//Functions
import alterNumber from "../../functions/changeNumberToPersion";

const SlidersBook = (props) => {
  const { name, author, image, price, discount, slug } = props;
  const discountedPrice = price - (price * 0.2);

  return (
    <article
      className={`${styles.article} col-xs-6 col-sm-4 col-md-3 col-lg-2`}
    >
      <div className={styles.container}>
        <Link to={`/book/discounted/${slug}`}>
          <div className={styles.coverphoto}>
            <img src={image} alt="book" />
          </div>
        </Link>
        <Link to={`/book/discounted/${slug}`}>
          <div className={styles.info}>
            <h5>{name}</h5>
            <h6>{author}</h6>
          </div>
        </Link>
        <hr />
        <div className={styles.price}>
          {discount ? (
            <div className={styles.discount}>
              <span className={styles.percent}>{"۲۰٪"}</span>
              <span className={styles.hide}>
                {alterNumber(String(price.toLocaleString()))} ریال
              </span>
              <span className={styles.show}>
                {alterNumber(String(discountedPrice.toLocaleString()))} ریال
              </span>
            </div>
          ) : (
            <div className={styles.withoutDiscount}>
              <span>{price} ریال</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default SlidersBook;
