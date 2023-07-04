const initialState = {
  loading: true,
  data: [],
  discountedBooks: [],
  bestsellerBooks: [],
  suggestionBooks: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...initialState,
        loading: true,
        data: [],
        error: "",
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...initialState,
        loading: false,
        data: action.payload,
        error: "",
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        ...initialState,
        loading: false,
        data: [],
        error: action.payload,
      };
    case "FETCH_DISCOUNTED_BOOKS":
      return {
        ...state,
        discountedBooks: action.payload,
      };
    case "FETCH_SUGGESTION_BOOKS":
      return {
        ...state,
        suggestionBooks: action.payload,
      };
    case "FETCH_BESTSELLER_BOOKS":
      return {
        ...state,
        bestsellerBooks: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
