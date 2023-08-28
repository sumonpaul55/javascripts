let lyrics = "Amaro Porano Jaha caY. Tumi tai Tumi tai go";
// lyrics.toLowerCase();

let find = "porano";
// find.toLowerCase();
console.log(lyrics.includes(lyrics));

if (lyrics.includes("Jaha") !== -1) {
  console.log("it's finded");
} else {
  console.log("not found");
}

// startsWith returns true if right

const startWith = lyrics.startsWith("Amaro");
console.log(startWith);
// EndsWith returns true if right -> it check from last

// something.endsWith(".pdf");

// use of split

let part = lyrics.split(" ");
let fullstop = lyrics.split(".");
let word = lyrics.split("");

console.log(part);
console.log(fullstop);
console.log(word);

let usetrim = "        sumon pul        ";
console.log(usetrim);
let trimed = usetrim.trim(); // it does not change the original string
console.log(trimed);

let lines = ["Amaro", "Porano", "Jaha", "caY.", "Tumi", "tai", "Tumi", "tai", "go"];

console.log(lines.join("-"));
