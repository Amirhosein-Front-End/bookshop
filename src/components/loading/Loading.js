import React from 'react';

//Styles
import styles from './Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.container}>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <div className={styles.circle3}></div>
            <h5>منتظر بمانید</h5>
        </div>
    );
};

export default Loading;