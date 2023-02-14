let title = document.createElement("h1");
let body = document.querySelector("body");
let beforeEl = document.querySelector(".keyInfo");
body.insertBefore(title, beforeEl);

title.innerHTML = "JS Local Storage Crash Coarse";
body.style.textAlign = "center";

let section = document.querySelector("section");
section.style.textAlign = "left";

// Demonstrate:

// Create an object
let myObj = {
    attribute1: "hi",
    attribute2: 45
}

// Print object to console
console.log(myObj);

// Save object to local storage and show that it didn't work
localStorage.setItem("keyName1", "aString...")
localStorage.setItem("keyName2", myObj);

// Remove items from local storage
localStorage.removeItem("keyName");

// Convert object to JSON string to it can be stored in local storage
let myObjString = JSON.stringify(myObj);
localStorage.setItem("myObjString", myObjString);

// Convert object back from JSON string to JS Object
let myObjUnstrung = JSON.parse(localStorage.getItem("myObjString"));
console.log(myObjUnstrung.attribute2 * 2);