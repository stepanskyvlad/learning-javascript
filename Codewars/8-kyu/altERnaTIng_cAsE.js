// https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

String.prototype.toAlternatingCase = function () {
    let changed_array = []
    for (const letter of this) {
        if (letter === letter.toUpperCase()) {
            changed_array.push(letter.toLowerCase())
        } else if (letter === letter.toLowerCase()) {
            changed_array.push(letter.toUpperCase())
        }
    }
    return changed_array.join("")
}

console.log("HeLLo WoRLD".toAlternatingCase())
