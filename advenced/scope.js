let a = 5;
console.log(a);
const scope = () => {
  let a = 10;
  console.log(a);
};
scope();
console.log(a);
