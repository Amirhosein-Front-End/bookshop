import React from "react";

import { useNavigate } from "react-router-dom";

//Styles
import styles from "./SearchedBook.module.css";

//Functions
import shorten from "../../functions/shortenBooksName";

const SearchedBook = ({ name, author, image, publisher, slug }) => {

  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.book}>
          <img src={image} alt="coverimg" width="100px" />
          <div className={styles.data}>
            <h3>کتاب {shorten(name)}</h3>
            <h5>اثر {author}</h5>
            <h5>انتشارات {publisher}</h5>
          </div>
        </div>
        <div className={styles.btn}>
          <button onClick={() => navigate(`/book/${slug}`)}>مشاهده</button>
        </div>
      </div>
    </div>
  );
};

export default SearchedBook;