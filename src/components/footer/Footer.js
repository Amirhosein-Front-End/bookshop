import React from 'react';

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div>
          <h5>تمام حقوق مادی و معنوی متعلق به <span>بوک شاپ سید</span> می باشد.</h5>
        </div>
      </footer>
    </div>
  );
}
 
export default Footer;