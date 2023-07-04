const initialState = {
  selectedBooks: [],
  totalBooksNumber: 0,
  totalBooksPrice: 0,
  totalBooksDiscount: 0,
  totalBooksCost: 0,
  cartCheckout: false,
  cartClear: false,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      if (!state.selectedBooks.find(book => action.payload.id === book.id)) {
        state.selectedBooks.push({...action.payload, quantity: 1})
      }
      return {
        ...state,
        ...calculate(state.selectedBooks),
      }
    case "INCREASE":
        state.selectedBooks.find(book => book.id === action.payload.id).quantity++;
        return {
          ...state,
          ...calculate(state.selectedBooks),
        }
    case "DECREASE":
        state.selectedBooks.find(book => book.id === action.payload.id).quantity--;
          return {
            ...state,
            ...calculate(state.selectedBooks),
          }
    case "REMOVE_BOOK":
      const removedBooks = state.selectedBooks.filter(book => book.id !== action.payload.id);
      return {
        ...state,
        selectedBooks: removedBooks,
        ...calculate(removedBooks),
      }
    case "CLEAR":
      return {
        selectedBooks: [],
        totalBooksNumber: 0,
        totalBooksPrice: 0,
        totalBooksDiscount: 0,
        totalBooksCost: 0,
        checkout: false,
        cartClear: false,

      }
    case "CHECKOUT":
      return {
        selectedBooks: [],
        totalBooksNumber: 0,
        totalBooksPrice: 0,
        totalBooksDiscount: 0,
        totalBooksCost: 0,
        cartCheckout: true,
        cartClear: false,
      }
    case "CHECKOUTMODAL":
      return {
        ...state,
        cartCheckout: false,
      }
      case "CLEAROUTMODAL":
      return {
        ...state,
        cartClear: true,
      }
    case "CANCELCLEAR":
      return {
        ...state,
        cartClear: false,
      }
    default:
      return state;
  }
};

//this function calculate all books price and also calculate all books count.
//in this function we calculated how much does client profit?

const calculate = books => {
  const totalBooksNumber = books.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
  const totalBooksPrice = books.reduce((accumulator, currentValue) => currentValue.discount ? accumulator + (currentValue.price - currentValue.price * 0.2) * currentValue.quantity : accumulator + currentValue.price * currentValue.quantity, 0);
  const totalBooksCost = books.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity, 0);
  const totalBooksDiscount = books.reduce((accumulator, currentValue) => currentValue.discount ? accumulator + (currentValue.price * 0.2) * currentValue.quantity : accumulator + 0, 0);
  return { totalBooksNumber, totalBooksPrice, totalBooksDiscount, totalBooksCost };
};

export default cartReducer;