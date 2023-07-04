import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

//Styles
import styles from "./Details.module.css";
import "../../styles/grid.css";

//Images
import cart from "../../image/add_item.svg";

//Functions
import { filteredBook } from "../../functions/fetchBook";
import alterNumber from "../../functions/changeNumberToPersion";
import quantity from "../../functions/findCartBooksQuantity";

//Components
import Loading from "../loading/Loading";
import Footer from '../footer/Footer';

//GraphQL
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../../GraphQL/queries";

//Actions
import { addItem, removeItem, increase, decrease } from "../../redux/cart/cartActions";

const Details = () => {

  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  const cartData = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  const { slug } = useParams();

  const { loading, data, errors } = useQuery(GET_BOOKS);
  const book = filteredBook(data, slug);

  if (loading) return <Loading />;
  if (errors)
    return (
      <h3 style={{ margin: "35px" }}>
        باعرض پوزش خطایی رخ داده است. لطفا مجددا تلاش فرمایید.
      </h3>
    );

  const discountedPrice = book.price - book.price * 0.2;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.bookcover}>
          <div className={styles.firstpart}>
            <div className={`${styles.coverphoto} col-xs-12 col-sm-6`}>
              <img src={book.image.url} alt="bookcover" />
            </div>
            <div className={`${styles.declare} col-xs-12 col-sm-6`}>
              <div className={styles.declarecontainer}>
                <div className={styles.title}>
                  <h2>{book.name}</h2>
                  <h2>{book.author}</h2>
                  <h2>انتشارات {book.publisher}</h2>
                </div>
                <div className={styles.cart}>
                  <div className={styles.price}>
                    {book.discount ? (
                      <div className={styles.discount}>
                        <span className={styles.percent}>۲۰٪</span>
                        <span className={styles.hide}>
                          {alterNumber(String(book.price.toLocaleString()))} ریال
                        </span>
                        <span className={styles.show}>
                          {alterNumber(String(discountedPrice.toLocaleString()))}{" "}
                          ریال
                        </span>
                      </div>
                    ) : (
                      <div className={styles.withoutdiscount}>
                        <span>
                          {alterNumber(String(book.price.toLocaleString()))} ریال
                        </span>
                      </div>
                    )}
                  </div>
                  <div className={styles.carticon}>
                    {quantity(cartData, book.id) < 1 && (
                      <img
                        src={cart}
                        alt="cartimg"
                        onClick={() => dispatch(addItem(book))}
                      />
                    )}
                    {quantity(cartData, book.id) > 1 && (
                      <div className={styles.counter}>
                        <div className={styles.btn}>
                          <button className={styles.increase} onClick={() => dispatch(increase(book))}>+</button>
                          <button className={styles.decrease} onClick={() => dispatch(decrease(book))}>-</button>
                        </div>
                        <span className={styles.counternumber}>{alterNumber(String(quantity(cartData, book.id)))}</span>
                      </div>
                    )}
                    {quantity(cartData, book.id) === 1 && (
                      <div className={styles.counter}>
                        <div className={styles.btn}>
                          <button className={styles.increase} onClick={() => dispatch(increase(book))}>+</button>
                          <button className={styles.decrease} onClick={() => dispatch(removeItem(book))}>-</button>
                        </div>
                        <span className={styles.counternumber}>{alterNumber(String(quantity(cartData, book.id)))}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4>ویژگی های محصول</h4>
        <div className={styles.info}>
          <table width="100%">
            <tbody>
              <tr>
                <td>موضوع</td>
                <td>{book.subject}</td>
              </tr>
              <tr>
                <td>نویسنده</td>
                <td>{book.author}</td>
              </tr>
              <tr>
                <td>انتشارات</td>
                <td>{book.publisher}</td>
              </tr>
              <tr>
                <td>سال انتشار</td>
                <td>{alterNumber(String(book.publishedYear))}</td>
              </tr>
              <tr>
                <td>تعداد صفحه</td>
                <td>{alterNumber(String(book.pageNumber))}</td>
              </tr>
              <tr>
                <td>وزن</td>
                <td>{alterNumber(String(book.weight))} گرم</td>
              </tr>
              <tr>
                <td>شابک</td>
                <td>{alterNumber(String(book.shabak))}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
