function reverseString(string) {
  //   for (let i = 0; i <= string.length - 1; i++) {
  //     console.log(string[i]);
  //   }
  //   console.log(string.length);
  let line = "";
  for (let i = string.length - 1; i >= 0; i--) {
    let element = string[i];
    line += element;
    console.log(line);
  }
  console.log(line);
}

let mystring = "Amaro Porano jaha Cay";
reverseString(mystring);
// console.log(mystring.indexOf("y"));
