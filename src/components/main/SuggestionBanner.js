import React from 'react';

import { Link } from 'react-router-dom';

//Styles
import styles from './SuggestionBanner.module.css';

const SuggestionBanner = () => {
  return (
    <section className={styles.wrapper}>
      <div>
        <Link to='/books/suggestion'>
          <img
            src='https://ikcdn.ir/img/1140x250?pic=www.iranketab.ir/Images/Pic/Revolution-1140-250.jpg'
            alt='banner img' />
        </Link>
      </div>
    </section>
  );
}
 
export default SuggestionBanner;