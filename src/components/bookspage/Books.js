import React from 'react';

//Image
import literatureimg from '../../image/literature.png';
import historyimg from '../../image/history.png';
import artimg from '../../image/art.png';
import teenagerimg from '../../image/teenager.png';

//Styles
import styles from './Books.module.css';

//Components
import Book from './Book';

const Books = () => {
  return (
    <div className={styles.bookscontainer}>
      <Book image={literatureimg} content={"شعر و ادبیات"} category={"literature"} />
      <Book image={historyimg} content={"تاریخ و جغرافی"} category={"history"} />
      <Book image={artimg} content={"هنر و سرگرمی"} category={"art"} />
      <Book image={teenagerimg} content={"کودک و نوجوان"} category={"child-and-teenager"} />
    </div>
  );
}
 
export default Books;