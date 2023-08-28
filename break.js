// for (var i = 0; i <= 20; i++) {
//   if (i > 5) {
//     break;
//   }
//   console.log(i);
// }
var arry = [39, 12, 14, 24, 16, 39, 5, 3954, 294, 29482, 392384, 294];
for (var i = 0; i < arry.length; i++) {
  var arrys = arry[i];
  if (arrys < 50) {
    continue;
  }
  console.log(arrys);
}
