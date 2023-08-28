function findOddSumOfArray(number) {
  let sum = 0;
  let oddarray = [];
  for (let i = 0; i < number.length; i++) {
    let element = number[i];
    if (element % 2 !== 0) {
      sum += element;
      oddarray.push(element);
      console.log("Your odd Number is =", element);
    }
  }
  console.log("Total sum is =", sum);
  console.log(oddarray);
}
let myNumbers = [54, 39, 24, 254, 12, 53, 19, 549, 29, 59, 329];
// let result = findOddSumOfArray(myNumbers);
let yourNumbers = [49, 382, 492, 491, 190, 463, 284, 183, 18, 2854, 603, 8];
findOddSumOfArray([38, 12, 189, 11, 245, 245, 29, 491, 4953, 383, 3821, 345, 354, 521, 55, 3421]);
findOddSumOfArray(yourNumbers);
