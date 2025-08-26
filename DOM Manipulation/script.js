// --------------------- Selecting Elements

const element1 = document.getElementById('myId');
console.log(element1);

const element2 = document.getElementsByClassName('myClass');
console.log(element2[0]); // Access First Element

const element3 = document.getElementsByTagName('p');
console.log(element3[0]); // Access First Paragraph

const element4 = document.querySelector('.myClass'); // First Match
const element5 = document.querySelectorAll('.myClass'); // All Match
console.log(element4); 
console.log(element5); 

// --------------------- Modifying DOM Element

// Change Content
let heading = document.getElementById('title');
heading.innerText = 'Hello! Deep';
// heading.innerHTML = '<em>Hello! Deep<em>';
// heading.textContent = 'Hidden Text Also';

// Change Attribute
const img = document.getElementsByTagName('img')[0]; 
img.setAttribute('src', 'c:/Users/Deep/Pictures/MY/_MG_3656.JPG');
document.body.append(img);

// Instead of document.write, append text  / CHANGE Style
// const elm = document.querySelector('.myClass');
// document.body.append(" - Updated Element: ", elm);
// elm.style.color = "blue"
// elm.style.fontSize = "20px"


// ADD / REMOVE CLASSES
// const elmt = document.querySelector('#myId');

// Add a class
// elmt.classList.add('newClass');
// console.log("After adding:", elmt.classList); 
// console.log("Has newClass?", elmt.classList.contains('newClass')); // true

// Remove a class
// elmt.classList.remove('oldClass');
// console.log("After removing:", elmt.classList); 
// console.log("Has oldClass?", elmt.classList.contains('oldClass')); // false


// --------------------- Creating and Removing DOM Element

// Creating Element
// const newDiv = document.createElement('div');
// newDiv.textContent = 'Hello World';
// document.body.appendChild(newDiv);

// Insert Elements
// const newElement = document.createElement('p');
// newElement.textContent = 'Insert Paragraph............';
// const container = document.getElementById('container');
// add to the end of container
// container.appendChild(newElement);
// insert add the beggining
// container.insertBefore(newElement, container.firstChild);


// Remove an Element
// const elements = document.querySelector('#myId');
// elements.remove();

// Replace an Element
const newElements = document.createElement('span');
newElements.textContent = "Replaced Element.....(Create Element and replace with myClass)"
// if you want to see this you want to append this

const oldElements = document.getElementsByClassName('myClass');
oldElements[0].replaceWith(newElements); // oldElements returns an HTMLCollection But replaceWith() works only on a single element
