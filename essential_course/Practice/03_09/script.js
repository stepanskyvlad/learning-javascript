/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  lidOpen: false,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  changeName: function (newName) {
    this.name = newName;
  },
  changeVolume: function (newVolume) {
    this.volume = newVolume;
  },
  changeColor: function (newColor) {
    this.color = newColor;
  },
  changePocketNum: function (newPocketNum) {
    this.pocketNum = newPocketNum;
  },
};
console.log("My backpack:", backpack)
backpack.changeName("Trip Backpack")
backpack.changeVolume(40)
backpack.changeColor("red")
backpack.changePocketNum(20)
console.log("Changed backpack:", backpack)
backpack.newStrapLength(37, 39)
console.log("Changed strap length:", backpack.strapLength.left, backpack.strapLength.right)
