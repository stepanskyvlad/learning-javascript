// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

function powersOfTwo(n){
    let result = []
    for (let i= 0; i < n+1; i++) {
        result.push(Math.pow(2, i))
    }
    return result
}

console.log(powersOfTwo(2))