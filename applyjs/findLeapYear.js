function findLeapYeer(years) {
  for (let year of years) {
    if (year % 4 == 0) {
      console.log(year, "is leap Year");
    }
  }
}
let years = [2003, 2005, 2010, 2032, 2014, 2028, 2015, 2024, 2112];
findLeapYeer(years);
