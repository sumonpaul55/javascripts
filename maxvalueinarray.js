function maxValueInarray(number) {
  let largestNum = 0;
  for (let element of number) {
    // console.log(num);
    if (element > largestNum) {
      largestNum = element;
    }
  }
  console.log(largestNum);
}

let number = [48, 39, 209, 58, 39, 93, 2948, 285, 239848, 284, 2828];

maxValueInarray(number);

function minvalueFromarray(lownum) {
  let lowest = lownum[i];
  for (let element of number) {
    // // console.log(num);
    // let maxvalue = element;
    if (element < lowest) {
      lowest = element;
    }
  }
  console.log(lowest);
}

let lownum = [48, 39, 209, 58, 39, 93, 2948, 285, 239848, 284, 2828];

minvalueFromarray(lownum);
