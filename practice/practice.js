// odd number between 19 to 53

for (let i = 19; i <= 53; i++) {
  if (i % 2 != 0) {
    // console.log(i);
  }
}

let bestFriend = ["abdul atel", "chatel mia", "katel ", " romisa", "batelabanu"];

let longname = bestFriend[0];
for (let i = 0; i <= bestFriend.length - 1; i++) {
  let friend = bestFriend[i];
  if (friend.length > longname.length) {
    longname = friend;
  }
}

console.log(longname);
