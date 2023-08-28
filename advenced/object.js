let obj = {
  a: 1,
  x: 3,
  age: 45,
  name: "jayed",
  address: "noyakhali",
};

let { name, age, ...rest } = obj;
console.log(rest);
console.log(name, age);
