// if ticket number is less then 100 than value will 100
// if ticket number more than 100 but less than 200 than first 100 ticket price will 100 tk and rest price will be 90
//if you purchase more than 200 tickets
// first 100 = 100 tk
// 101 to 102  = first 100 = 100 tk rest price will 90
// 200+ = 70
// What will be the final value of the sum?
function ticketPrice(tnumber) {
  let first100 = 100;
  let second100 = 90;
  const rest = 70;
  if (tnumber <= 100) {
    const price = tnumber * first100;
    return price;
  } else if (tnumber <= 200) {
    const price = 100 * first100 + (tnumber - 100) * second100;
    return price;
  } else {
    const first100Price = 100 * first100;
    const second100Price = 100 * second100;
    const restPrice = (tnumber - 200) * rest;
    const tutalP = first100Price + second100Price + restPrice;
    return tutalP;
  }
}

let totalPrice = ticketPrice(350);

console.log(totalPrice);
