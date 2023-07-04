function shorten (name) {
  
  const len = name.length;
  if (len > 10) {
    return name.slice(0, 11) + "...";
  }
  return name;
}

export default shorten;