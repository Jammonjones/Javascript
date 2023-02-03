/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInfo = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInfo["name"] = "J. Ammon Jones";
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myInfo["photo"] = "images/20221125_100108 (1).png";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInfo["favoriteFoods"] = ["Pizza", "Curry", "Mexican Food"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInfo["hobbies"] = ["Snowboard", "Mountain Bike", "Cook"]
// Step 6: Add another property named placesLived with a value of an empty array
myInfo["placesLived"] = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
let newObject1 = {
    place: "",
    length: ""
}
myInfo.placesLived.push(newObject1);
// Step 8: For each property, add appropriate values as strings
myInfo.placesLived[0].place = "Sandy Utah";
myInfo.placesLived[0].length = "11 Years";
// Step 9: Add additional objects with the same properties for each place you've lived
let newObject2 = {
    place: "",
    length: ""
}
myInfo.placesLived.push(newObject2);

myInfo.placesLived[1].place = "Ephraim Utah";
myInfo.placesLived[1].length = "2 Years";

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").innerHTML = myInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
photoIdRef = document.querySelector("#photo");
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
photoIdRef.src = myInfo.photo;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
myInfo.favoriteFoods.forEach(function(food)
{
let li = document.createElement("li");
li.innerHTML = food
let ul = document.querySelector("#favorite-foods")
ul.appendChild(li);
}
)
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
myInfo.hobbies.forEach(function(hobby)
{
    let li = document.createElement("li");
    li.innerHTML = hobby;
    let ul = document.querySelector("#hobbies");
    ul.append(li);
})
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
myInfo.placesLived.forEach(function(object)
{
    let definitionTerm = document.createElement("dt");
    definitionTerm.innerHTML = object.place;
    let definitionDescription = document.createElement("dd");
    definitionDescription.innerHTML = object.length;

    let pL = document.querySelector("#places-lived");
    pL.appendChild(definitionTerm);
    pL.appendChild(definitionDescription);


})
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
