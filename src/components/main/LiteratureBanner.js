import React from 'react';

import { Link } from 'react-router-dom';

//Styles
import styles from './LiteratureBanner.module.css';

const LiteratureBanner = () => {
  return (
    <section className={styles.wrapper}>
      <div>
        <Link to='/books/literature'>
          <img
            src='https://ikcdn.ir/img/1140x250?pic=www.iranketab.ir/Images/Pic/nobell_1140_250.jpg'
            alt='banner img' />
        </Link>
      </div>
    </section>
  );
}
 
export default LiteratureBanner;