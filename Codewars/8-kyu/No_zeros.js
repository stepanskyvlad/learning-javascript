// https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

function noBoringZeros(n) {
    while (Number.isInteger(n/10) && n !== 0) {
        n = n / 10
    }
    return n
}

console.log(noBoringZeros(0))
