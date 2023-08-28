// const number = [453, 32, 11, 24, 56, 43543, 6, 3];
// const doubled = [];
//easy method
// for (const num of number) {
//   const double = num * 2;
//   doubled.push(double);
// }

const number = [453, 32, 11, 24, 56, 43543, 6, 3];
// console.log(doubled);
// number.reverse();
// console.log(number.fill(6));

// const double = (num) => num * 2;

// const result = number.map(double);
const result = number.map((num) => num * 2);
// console.log(result);
const friends = ["jodu", "modupaul", "kouodu", "bodu"];

console.log(friends.map((fried) => fried[0]));
console.log(friends.map((fried) => fried.length));
console.log(friends.map((fried) => fried.startsWith("m")));
