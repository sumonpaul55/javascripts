let phone = [
  { name: "nokia", price: 294384 },
  { name: "some", price: 4897 },
  { name: "difere", price: 38974 },
  { name: "dkje", price: 3283 },
  { name: "sumon", price: 3280 },
  { name: "djus", price: 3283 },
  { name: "fdkje", price: 49785 },
  { name: "fldse", price: 3978 },
];
function chepestPhone(phone) {
  let chephone = phone[0];
  //   console.log(chephone);
  for (let i = 0; i < phone.length; i++) {
    let phonePrice = phone[i];
    if (phonePrice.price < chephone.price) {
      chephone = phonePrice;
    }
  }
  return chephone;
}

let chpestPhone = chepestPhone(phone);
console.log(chpestPhone);
