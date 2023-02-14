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
    // console.log(myObj);

// Save object to local storage then access it and print it
    localStorage.setItem("keyName1", "aString...")
    localStorage.setItem("keyName2", myObj);