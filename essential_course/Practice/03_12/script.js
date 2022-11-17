/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js"


class Book {
    constructor(
        name,
        color,
        pages,
        isRead
    ) {
        this.name = name;
        this.color = color;
        this.pages = pages;
        this.isRead = isRead;
    }
    finishBook(bookStatus) {
        this.isRead = bookStatus;
    }
}

const lotr = new Book(
    "Lord of the Rings",
    "green",
    800,
    false
)

const sherlock1 = new Book (
    "The Adventures of Sherlock Holmes",
    "lightgreen",
    290,
    false
)

const sherlock2 = new Book (
    "The Hound of the Baskervilles",
    "pink",
    320,
    false
)

console.log("Name of the first book:", lotr.name, "\nThe color and number of pages are:", lotr.color, lotr.pages)
console.log("Name of the second book:", sherlock1.name,
    "\nThe color and number of pages are:", sherlock1.color, sherlock2.pages)
console.log("Name of the second book:", sherlock2.name,
    "\nThe color and number of pages are:", sherlock2.color, sherlock2.pages)
sherlock1.finishBook(true)
sherlock2.finishBook(true)
console.log("Is", lotr.name, "is read?", lotr.isRead)
console.log("Is", sherlock1.name, "is read?", sherlock1.isRead)
console.log("Is", sherlock2.name, "is read?", sherlock2.isRead)


const myBackpack = new Backpack(
    "Backpack for study",
    30,
    "darkblue",
    3,
    28, 28,
    true
)

console.log(myBackpack)