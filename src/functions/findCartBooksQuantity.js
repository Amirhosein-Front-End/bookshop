// this function find quantity of chosen book which used in details component
// to show buttons in that component.

function quantity(state, id) {
  const foundBook = state.selectedBooks.find(book => book.id === id);
  if (foundBook) {
    return foundBook.quantity
  } else {
    return -1
  }
}

export default quantity;