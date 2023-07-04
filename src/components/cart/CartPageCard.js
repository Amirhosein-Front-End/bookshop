import React from 'react';

//Redux
import { useDispatch } from 'react-redux';

//Actions
import { removeItem, increase, decrease } from '../../redux/cart/cartActions';

//Styles
import styles from './CartPageCard.module.css';
import '../../styles/grid.css';

//Functions
import alterNumber from '../../functions/changeNumberToPersion';
import shorten from '../../functions/shortenBooksName';

//TrashIcon
import trash from '../../image/trash.svg';

const CartPageCard = ({ image , name , price, count, id, discount }) => {

  const dispatch = useDispatch();
  const discountedPrice = alterNumber(String((price - (price * 0.2)).toLocaleString()));

  return (
    <div className={`${styles.cartcontainer}`}>
      <div className={styles.container}>
        <div className={styles.cartimage}>
          <img src={image.url} width='80px' alt='book img' />
        </div>
        <div className={styles.cartcardinfo}>
          <h4>{shorten(name)}</h4>
          <h5>{discount ? discountedPrice : alterNumber(String(price.toLocaleString()))}</h5>
        </div>
        <div className={styles.bookcounter}>
          <span>{alterNumber(String(count))}</span>
        </div>
        <div className={styles.counterbtn}>
          {
            count === 1 ?(
              <>
                <button onClick={() => dispatch(increase({id}))}>+</button>
                <button onClick={() => dispatch(removeItem({id}))}><img src={trash} alt='remove' /></button>
              </>
            ) : (
              <>
                <button onClick={() => dispatch(increase({id}))}>+</button>
                <button onClick={() => dispatch(decrease({id}))}>-</button>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}
 
export default CartPageCard;