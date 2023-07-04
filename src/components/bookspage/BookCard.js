import React from "react";

import { Link } from "react-router-dom";

//Functions
import alterNumber from '../../functions/changeNumberToPersion';
import shorten from "../../functions/shortenBooksName";

//Styles
import styles from "./BookCard.module.css";
import "../../styles/grid.css";

const BookCard = ({image, name, author, publisher, slug, type, price, discount}) => {

  const discountedPrice = price - (price * 0.2);

  return (
    <div className={`${styles.bookcardcontainer} col-xs-4 col-sm-6 col-md-4 col-lg-3`}>
      <div className={styles.container}>
        <div className={styles.coverphoto}>
          <img src={image} alt="coverimg" />
        </div>
        <div className={styles.cardinfo}>
          <div className={styles.details}>
            <h4>کتاب {shorten(name)}</h4>
            <h5>اثر {author}</h5>
            <h5>انتشارات {publisher}</h5>
          </div>
          <div className={styles.price}>
            <span>قیمت : </span>
            {discount ? (
              <div className={styles.discountedprice}>
                <div><span>{alterNumber(String(price.toLocaleString()))} ریال</span></div>
                <hr />
                <div>
                  <span>{alterNumber(String(discountedPrice.toLocaleString()))} ریال</span>
                  <span>{"۲۰٪"}</span>
                </div>
              </div>
            ) : (
              <div className={styles.withoutdiscountedprice}>
                <span>{alterNumber(String(price.toLocaleString()))} ریال</span>
              </div>
            )}
          </div>
          <div className={styles.bookcardsdetails}><Link to={`/book/${type}/${slug}`}>مشاهده</Link></div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
