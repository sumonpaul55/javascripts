let object = {
  name: "some one",
  age: 50,
  hobby: "hangout",
  status: "single",
};
for (const key in object) {
  console.log(object[key]);
}
const arry1 = [4593, 342, 2321];
const arr2 = [...arry1];
// console.log(arr2);
let obj = { foo: "sumon" };
obj.bar = 2;
// console.log(obj);
let a = 12,
  b = 3;
[a, b] = [b, a];

console.log(a, b);
console.log(Object.entries(obj));
