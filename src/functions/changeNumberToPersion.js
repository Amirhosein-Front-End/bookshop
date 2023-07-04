const persionNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

function alterNumber(number) {
  let newNumber = "";
  for (let i = 0; i < number.length; i++) {
    if (number[i] === ".") {
      newNumber += ".";
    } else if (number[i] === ",") {
      newNumber += ","
    }
    else {
      newNumber += persionNumbers[number[i]];
    }
  }
  return newNumber;
}

export default alterNumber;
