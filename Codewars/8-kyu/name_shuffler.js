// https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript

function nameShuffler(str){
    let split_str = str.split(" ")
    return [split_str[1], split_str[0]].join(" ")
}


console.log(nameShuffler("Yarema Vladyslav"))


// other solutions
//function nameSuffle(str){
//   return str.split(' ').reverse().join(' ')
// }