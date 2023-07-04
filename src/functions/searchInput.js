function removeSpace(value) {
  const replacedValue = value.replace(" ", "-");
  return replacedValue;
}

function addSpace(value) {
  const replacedValue = value.replace("-", " ");
  return replacedValue;
}

function searchedBook(data, slug) {
  const combinedData = [];
  for (let i in data) {
    combinedData.push(...data[i]);
  }
  const filtered = combinedData.filter(item => item.name.includes(slug) || item.author.includes(slug));
  return filtered;
}

export { removeSpace, addSpace, searchedBook };