// this function at first pushed all fetched data in an array instead of object
// then find and get intended book data with the url slug through all fetched data to show aimed book
// in details page.

function filteredBook(data, slug) {
  const combinedData = [];
  for (let i in data) {
    combinedData.push(...data[i]);
  }
  const filtered = combinedData.find(item => item.slug === slug);
  return filtered;
}

export { filteredBook };
