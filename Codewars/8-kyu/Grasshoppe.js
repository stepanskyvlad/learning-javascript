// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

var summation = function (num) {
  let mySum = 0
  for (let i = 1; i < num+1; i++) {
    mySum = mySum + i;
  }
  return mySum
}

console.log(summation(4))