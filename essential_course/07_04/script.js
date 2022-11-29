 /**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */
let myThings = ["book", "pen", "pencil", "notebook",
     "laptop", "printer", "ruler", "glue"];
console.log(myThings);

let lastItem = myThings.pop();
console.log(myThings);

myThings.unshift(lastItem);
console.log(myThings);

myThings.sort();
console.log(myThings);

let found = myThings.find((element) => element === "notebook");
console.log(found);

foundIndex = myThings.indexOf(found);
console.log(foundIndex);

delete myThings[foundIndex];
console.log(myThings);

myThings.splice(3, 1);
console.log(myThings);

myThings.push("notebook");
console.log(myThings)

let remove = "notebook";
myThings.splice(myThings.indexOf(remove), 1);
console.log(`Array with "${remove}" removed:`, myThings);