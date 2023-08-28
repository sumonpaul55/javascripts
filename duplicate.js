let names = ["abul", "kabul", "cabul", "dabul", "abul", "mabul", "abul", "kabul", "cabul", "dabul", "abul", "mabul"];

function removeDuplicate(names) {
  let uniqName = [];
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (uniqName.includes(name) === false) {
      uniqName.push(name);
    }
  }
  return uniqName;
}

let uniqperson = removeDuplicate(names);
console.log(uniqperson);
