// var pTags = document.querySelectorAll("p");
// var divTags = document.querySelectorAll("div");
// var aTags = document.querySelectorAll("a");
// var imgEl = document.querySelectorAll("img");
// var changeP = document.querySelector("#change2");

// console.log(pTags);

// // How was all of the styling done if there is no CSS?
// // All the styling done to the page uses the method, .setAttribute.
// // The setAttribute method takes in two arguments, first is the name of the attribute, and the second is its value. i.e., `setAttribute("style", "color:white;");

// // The major difference between setting styles with .setAttribute vs the .style methods is that when using setAttribute we enter the CSS properties and values like we would in a normal external stylesheet or inline styling.

// pTags[0].setAttribute("style", "font-size: 65px;");
// changeP.setAttribute("style", "color:blue; border:2px solid black;");
// aTags[0].setAttribute("href", "https://github.com");
// imgEl[0].setAttribute("src", "images/image_1.jpg");
// imgEl[0].setAttribute("style", "width:500px; height:200px;");

// for (var i = 0; i < divTags.length; i++) {
//   divTags[i].setAttribute("style", "text-decoration:underline; color:red;");
// }

// * Give a `src` and `alt` attribute to the 3 provided `img` tags.

var img1 = document.querySelectorAll("img");
img1[0].setAttribute("src", "https://via.placeholder.com/150");
