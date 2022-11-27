/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */
document.querySelectorAll("li:last-child span").forEach(item => item.style.backgroundColor="red");
document.querySelectorAll("#pack02 li:last-child").forEach(item =>
    item.style.backgroundColor="lightgrey");
document.querySelectorAll("#pack02 h1").forEach(item => item.style.backgroundColor="green");
console.log(document.querySelector("#pack02"))
console.log(document.querySelector("main li:first-child"))
