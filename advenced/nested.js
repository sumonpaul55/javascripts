const user = {
  id: 330,
  name: "name of man",
  street: {
    first: "34/nowdor",
    second: "some where",
    third: "no dorai",
  },
  profession: "teacher",
};
// console.log(user.street.second);
const user2 = {
  id: 40343,
  name: "someone's name",
  address: {
    city: "chittagong",
    country: "Bangaldesh",
  },
};
console.log(user.street?.second);
console.log(user2.street?.second); // here ? is option chaining
