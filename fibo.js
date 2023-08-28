// fibonacci initial value have to minimum - 2 values
//such as let fibo = [0,1]

let fibo = [0, 1];
//let's create a fibonacci
for (let i = 2; i <= 30; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
