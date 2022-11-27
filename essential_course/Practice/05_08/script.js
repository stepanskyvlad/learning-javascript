/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */
console.log(document.querySelector("main p"))
console.log(document.querySelector("main p").className)
console.log(document.querySelector("main p").className = "description-of-bag")
console.log(document.querySelector("main p").classList)
document.querySelector("main p").classList.add("new-class")
document.querySelector("main p").classList.add("unnecessary-class")
console.log(document.querySelector("main p").classList)
document.querySelector("main p").classList.remove("unnecessary-class")
console.log(document.querySelector("main p").classList)
console.log(document.querySelector("main p").classList.toggle("unnecessary-class"))
console.log(document.querySelector("main p").classList.toggle("unnecessary-class"))
console.log(document.querySelector("main p").classList.toggle("new-class"))
console.log(document.querySelector("main p").hasAttribute("class"))
document.querySelector("main p").setAttribute("title", "unnecessary value")
console.log(document.querySelector("main p").attributes)
document.querySelector("main p").removeAttribute("title")
console.log(document.querySelector("main p").style)
document.querySelector("main p").style.color = "lightgrey"
document.querySelector("main p").style.backgroundColor = "darkred"
document.getElementById("description-of-bag").style.borderWidth = "1px 5px 10px 20px";
document.querySelector("main p").style.borderColor = "darkblue"

