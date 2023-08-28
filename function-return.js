function add(number1, number2) {
  //   console.log(number1, number2);
  var sum = number1 + number2;
  return sum;
}

add(4, 5);
var total = add(40, 39);
// console.log("Total =", total);

// example of shop something

function bringSingara(money) {
  var singaraPrice = 10;
  var singara = money / singaraPrice;
  return singara;
}

var singaras = bringSingara(300);
var singaras = bringSingara(1200);
console.log(singaras);
