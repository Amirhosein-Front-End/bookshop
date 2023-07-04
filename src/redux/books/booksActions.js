const fetchBooksRequest = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};

const fetchBooksSuccess = (books) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: books,
  };
};

const fetchBooksFailure = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};

const fetchDiscountedBooks = (books) => {
  return {
    type: "FETCH_DISCOUNTED_BOOKS",
    payload: books,
  };
};

const fetchBestsellerBooks = (books) => {
  return {
    type: "FETCH_BESTSELLER_BOOKS",
    payload: books,
  };
};

const fetchSuggestionBooks = (books) => {
  return {
    type: "FETCH_SUGGESTION_BOOKS",
    payload: books,
  };
};

export {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksFailure,
  fetchDiscountedBooks,
  fetchBestsellerBooks,
  fetchSuggestionBooks,
};
