function organizedBooks(books) {
  const combinedData = [];
  for (let book in books) {
    combinedData.push(...books[book]);
  }
  return combinedData;
}
const discountedBooks = (books) => {
  const filteredBooks = [];
  const discounted = [];
  for (let book in books) {
    filteredBooks.push(books[book].filter((item) => item.discount === true));
  }
  const len = filteredBooks.length;
  for (let i = 0; i < len; i++) {
    discounted.push(...filteredBooks[i]);
  }
  return discounted;
};

const bestSellerBooks = (books) => {
  const filteredBooks = [];
  const bestSeller = [];
  for (let book in books) {
    filteredBooks.push(books[book].filter((item) => item.soldNumber > 50));
  }
  const len = filteredBooks.length;
  for (let i = 0; i < len; i++) {
    bestSeller.push(...filteredBooks[i]);
  }
  return bestSeller;
};

const suggestionBooks = (books) => {
  const filteredBooks = [];
  const suggestion = [];
  for (let book in books) {
    filteredBooks.push(
      books[book].filter(
        (item) => item.discount === true && item.soldNumber > 50
      )
    );
  }
  const len = filteredBooks.length;
  for (let i = 0; i < len; i++) {
    suggestion.push(...filteredBooks[i]);
  }
  return suggestion;
};

const reduceBooks = (books) => {
  const filteredBooks = [];
  for (let i = 0; i < 6; i++) {
    filteredBooks.push(books[i]);
  }
  return filteredBooks;
};

export { discountedBooks, bestSellerBooks, suggestionBooks, reduceBooks, organizedBooks };
