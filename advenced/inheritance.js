//quiz
// const cube = (x) => x * x * x;
// const [a, b] = [1, 2, 3, 4, 45, 5];
// const { x, y, z } = { x: 1, y1: 2, z: 3 };
// const nums = [1, 2, 3, 4, 5];
// let output = nums.filter((n) => n % 2);
// const product = { name: "Laptop", model: "Yoga 3", price: 49000, dusk: "512SSD" };
// const { price } = product;
// console.log(price);

class Vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log(`Gari is consoling from isde vehicle class`);
  }
}

class Bus extends Vehicle {
  constructor(name, price, seat, ticketPrice) {
    super(name, price);
    this.seat = seat;
    this.ticketPrice = ticketPrice;
  }
}

class Truck extends Vehicle {
  constructor(name, price, load) {
    super(name, price);
    this.load = load;
  }
}
let myTruck = new Truck("TaTa", 30000, "30 Ton");
// console.log(myTruck);

// task
let data2 = {
  data: [
    {
      bookId: 1,
      bookDetail: {
        name: "Haulader adda",
        category: "XYz",
        price: "205$",
      },
      bookCategory: "pchylogy",
    },
    {
      bookdId: 2,
      bookDetail: {
        name: "gobluder adda",
        category: "ABC",
        price: "400$",
      },
    },
  ],
};

// data2.data.map((items) => console.log(items.bookDetail.name));

let number = [33, 50, 79, 90, 100, 101, 34, 30];

number.filter((num) => {
  // num % 10 == 0 ? console.log(num) : console.log("not divisable");
});

// task 2
const instructor = [
  {
    name: "Akhil",
    age: 20,
    position: "senior",
  },
  {
    name: "Mokhil",
    age: 50,
    position: "junior",
  },
  {
    name: "Sokil",
    age: 60,
    position: "senior",
  },
];

let senior = instructor.filter((instractor) => {
  return instractor.position == "senior";
});

let akhi = {
  name: "Akhil",
  age: 20,
  position: "senior",
};
const { age } = akhi;
console.log(akhi["position"]);

let array = [3, 54, 3, 5, 3, 2, 5, 6];
// array.length = 0;

// using pop
// while (array.length) {
//   array.pop();
// }
// using splice

array.splice(0, array.length);
console.log(array);
