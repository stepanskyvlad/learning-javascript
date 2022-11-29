/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["pig", "headlamp", "pen"];

// backpackContents.push("pencil", 5);
// console.log(backpackContents);
//
// backpackContents.unshift("pencil", 5);
// console.log(backpackContents);
//
// backpackContents.shift();
// console.log(backpackContents);
//
// backpackContents.pop();
// console.log(backpackContents);
//
// console.log(backpackContents.join(" | "));


// backpackContents.forEach(function (item) {
//   item = `<li>${item}</li>`;
//   console.log(item);
// });
//
// console.log(backpackContents)

let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);
console.log(backpackContents)
