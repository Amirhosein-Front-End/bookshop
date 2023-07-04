const addItem = book => {
  return {
    type: "ADD_BOOK",
    payload: book,
  };
};

const removeItem = book => {
  return {
    type: "REMOVE_BOOK",
    payload: book,
  };
};

const increase = book => {
  return {
    type: "INCREASE",
    payload: book,
  };
};

const decrease = book => {
  return {
    type: "DECREASE",
    payload: book,
  };
};

const checkout = () => {
  return {
    type: "CHECKOUT",
  };
};

const clear = () => {
  return {
    type: "CLEAR",
  };
};

export { addItem, removeItem, increase, decrease, checkout, clear }