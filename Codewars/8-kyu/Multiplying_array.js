// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

function grow(x){
    let result = 1
    for (const num of x) {
        result = result * num
    }
    return result
}

console.log(grow([1, 2, 3])) //6