// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

function fakeBin(x){
    let result = []
    for (const number of x) {
        if ((number/1) < 5) {
            result.push(0)
        } else {
            result.push(1)
        }
    }
    return result.join("")
}

console.log(fakeBin('45385593107843568'))