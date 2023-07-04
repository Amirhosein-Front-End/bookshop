import React from 'react';

import { Link } from 'react-router-dom';

//Styles
import styles from './Book.module.css';
import '../../styles/grid.css';

const Book = ({image, category, content}) => {
  return (
    <div className={`${styles.bookcontainer} col-xs-4`}>
      <div>
        <Link to={`/books/${category}`}>
          <img src={image} alt='category' />
        </Link>
        <h5>{content}</h5>
      </div>
    </div>
  );
}
 
export default Book;