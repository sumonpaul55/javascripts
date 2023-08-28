function isLeapYear(year) {
  if (year % 4 == 0) {
    return true;
  }
  return false; // we can write only return instead of else
}

let year = isLeapYear(2023);
console.log(year);
