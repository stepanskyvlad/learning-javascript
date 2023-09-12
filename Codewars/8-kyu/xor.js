function xor(a, b) {
  if (a && b){
      return false
  } else return !!(a || b);
}

console.log(xor(true, true))


// other solutions
// function xor(a, b) {
//   return a != b;
// }
