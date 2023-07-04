import React from 'react';

import { useNavigate, Link } from 'react-router-dom';

//Styles
import styles from './SlideMenu.module.css';

//Images
import logo from './Navbar Svg/logo.svg';
import close from './Navbar Svg/close.svg';

const SlideMenu = ({clicked}) => {

    const navigate = useNavigate();

    return (
        <div className={`${styles.burgermenu} ${clicked.burgerClicked && styles.show}`}>
            <div className={`${styles.container} ${clicked.burgerClicked && styles.open}`}>
                <div className={styles.closeSvg} onClick={clicked.burgerClickHandler}>
                    <img src={close} alt='close' />
                </div>
                <div className={styles.logo}>
                    <img src={logo} alt='logo' onClick={() => navigate("/")} />
                    <span>بوک شاپ سید</span>
                </div>
                <ul>
                    <li><Link to='/books'>کتاب ها</Link></li>
                    <li><Link to='/books/bestSeller'>پرفروش ترین ها</Link></li>
                    <li><Link to='/books/suggestion'>پیشنهاد ما</Link></li>
                    <li><Link to='/books/discounted'>تخفیف ویژه</Link></li>
                    <li><Link to='/contact'>تماس با ما</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default SlideMenu;