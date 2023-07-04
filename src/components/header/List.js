import React from 'react';

import { Link } from 'react-router-dom';

//Styles
import styles from './List.module.css';

const List = () => {
    return (
        <ul className={styles.container}>
            <li><Link to='/books'>کتاب ها</Link></li>
            <li><Link to='/books/bestSeller'>پرفروش ترین ها</Link></li>
            <li><Link to='/books/suggestion'>پیشنهاد ما</Link></li>
            {/* <li><Link to='/aboutus'>درباره ما</Link></li> */}
            <li><Link to='/contact'>تماس با ما</Link></li>
        </ul>
    );
}
 
export default List;