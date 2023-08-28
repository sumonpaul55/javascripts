// // has some properties, method
// class Product {
//   county = "Bangladesh";
//   constructor(name) {
//     this.name = name;
//   }
//   speak(talk) {
//     return `talking about ${talk}`;
//   }
// }

// const lenevo = new Product("this is leneveo");
// console.log(lenevo, lenevo.speak("sumon pual"));

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  leacture() {
    console.log(`Sir is Teaching Accounting`);
  }
}

const topon = new Teacher("Sumon", "Accounting");
console.log(topon);
