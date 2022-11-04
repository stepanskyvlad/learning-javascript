/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const myBag = {
    name: "Study Bag",
    volume: 28,
    color: "darkblue",
    pocketNum: 4,
    strapLength: {
      left: 30,
      right: 30,
    },
    isOpen: true,
    openBag: function (bagStatus) {
        this.isOpen = bagStatus;
    },
    changeStrapLength: function (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
    book: {
        name: "Lord of the Rings",
        color: "green",
        pages: 800,
        isRead: false,
        readBook: function (finishBook) {
            this.isRead = finishBook
        },
    },
};
console.log("My bag is:", myBag);
console.log("The number of pages of the book:", myBag.book.pages);

console.log("Is the book read?", myBag.book.isRead);
console.log("Reading the book...", myBag.book.name);
myBag.book.readBook(true);
console.log("Is the book read?", myBag.book.isRead);

console.log("Name of my bag:", myBag.name, "\nColor:", myBag.color,
    "\nVolume:", myBag.volume);

console.log("Is the bag open?", myBag.isOpen)
console.log("Closing the bag...")
myBag.openBag(false)
console.log("Is the bag open?", myBag.isOpen)

console.log("Length of the straps:", "\nleft strap:",
    myBag.strapLength.left, "\nright strap:", myBag.strapLength.right);

let lengthLeftStrap = 42;
let lengthRightStrap = 55;

myBag.changeStrapLength(lengthLeftStrap, lengthRightStrap);
console.log("Length of the straps:", "\nleft strap:",
    myBag.strapLength.left, "\nright strap:", myBag.strapLength.right);
