import { combineReducers } from 'redux';

import reducer from './books/booksReducer';
import cartReducer from './cart/cartReducer';

const reducers = combineReducers({
  booksState: reducer,
  cartState: cartReducer,
})

export default reducers;