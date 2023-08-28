const user ={id:1,name: "gorib ami" , job: "actor"};
//cover object to json
const stringfied = JSON.stringify(user)
// console.log(stringfied)
const shop ={
    owner: "Alia",
    address: {
        city: "some where",
        country: "BD"
    },
    product: ["laptop", "mic", "monitor"],
    isOpen: true,
    isNew: false
}
console.log(shop);
const shopjson = JSON.stringify(shop);
// console.log(shopjson)
// convert json to javascript object
const jsobject = JSON.parse(shopjson)
console.log(jsobject)