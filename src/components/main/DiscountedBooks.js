import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

//Styles
import styles from "./DiscountedBooks.module.css";

//Components
import SlidersBook from "../shared/SlidersBook";
import Loading from "../loading/Loading";

//Functions
import { reduceBooks } from "../../functions/filteredBooks";

const DiscountedBooks = () => {

  const data = useSelector((state) => state.booksState);
  const books = reduceBooks(data.discountedBooks);

  if (data.loading) {
    return <Loading />;
  }
  if (data.error) {
    return <h3>باعرض پوزش خطایی رخ داده است. لطفا مجددا تلاش نمایید.</h3>;
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>
        <h3>کتابهای تخفیف خورده</h3>
      </div>
      <div className={styles.contents}>
        <div className={styles.books}>
          {books.map((book) => (
            <SlidersBook
              key={book.id}
              name={book.name}
              author={book.author}
              price={book.price}
              discount={book.discount}
              image={book.image.url}
              slug={book.slug}
            />
          ))}
        </div>
      </div>
      <div className={styles.details}>
        <Link to="/books/discounted">مشاهده همه موارد</Link>
      </div>
    </section>
  );
};

export default DiscountedBooks;
