function clouser() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

let var1 = clouser();
let var2 = clouser();
console.log(var1());
console.log(var1());
console.log(var1());

console.log(var2());
console.log(var2());
console.log(var2());
let another = clouser();
console.log(another());
