/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const lotr = new Book(
    "Lord of the Rings",
    "J. R. R. Tolkien",
    "2021",
    "darkgreen",
    900,
    127,
    false
)

const adventuresOfSherlockHolmes = new Book(
    "The Adventures of Sherlock Holmes",
    "Arthur Conan Doyle",
    1892,
    "lightgreen",
    290,
    285,
    false
)

const theSignOfTheFour = new Book(
    "The Sign of the Four",
    "Arthur Conan Doyle",
    2015,
    "black",
    133,
    0,
    false
)

const theHound = new Book(
    "The Hound of the Baskervilles",
    "Arthur Conan Doyle",
    2021,
    "pink",
    150,
    15,
    false
)

const theValley = new Book(
    "The Valley of Fear",
    "Arthur Conan Doyle",
    2021,
    "pink",
    160,
    16,
    false
)
console.log(theHound.name, theHound.currentPage, theHound.isRead);
console.log(theValley.name, theValley.currentPage, theValley.isRead);
theValley.changePage(36);
theHound.changePage(25)
console.log(theHound.name, theHound.currentPage)
console.log(theValley.name, theValley.currentPage)
console.log(lotr.name, lotr.currentPage, lotr.isRead)
lotr.changePage(290)
lotr.bookStatus(true)
console.log(lotr.name, lotr.currentPage, lotr.isRead)
