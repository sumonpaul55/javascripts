let objname = {
  keyName: "valueName",
  keyName1: "value1",
};

// console.log(Object.keys(objnamme)[1], Object.values(objnamme)[0]);

// // if known the keys name we can get the value and set the value
// let specificValue = objname["keyName"];
// objname["keyName"] = "Other value name";
// console.log(objname);
objname.keyName = "sumo";

let entries = Object.entries(objname);
console.log(entries);
// it gives 2 array -> one is all of the keys of objec and the other is all the vlues of object
