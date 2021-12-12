// QUESTION 1 //

// Consider you have following code snippet:

// (Copy it in your HTML file)

// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>



// Question 1 (i)
var q1Part1 = document.getElementById('main-content');


// Question 1 (ii)
console.log(q1Part1.children);


// Question 1 (iii)
var q1Part3 = document.getElementsByClassName('render');

document.write("<br>" + "<br>" + "Below written data is from assignment, question 1_part 3" + "<br>" + "<br>")

for (i = 0; i < q1Part3.length; i++) {
    document.write(q1Part3[i].innerHTML + "<br>")
}


// Question 1 (iv)
var q1Part4 = document.getElementById('first-name');

q1Part4.value = "Muhammad Khalil"


// Question 1 (v)
var q1Part5One = document.getElementById('last-name');

q1Part5One.value = "Muhammad Yousuf"


var q1Part5Two = document.getElementById('email');

q1Part5Two.value = "khalil.haider2109@gmail.com"




// QUESTION 2 //
// 2. use HTML code of question 1 and show the result on browser.


// Question 2 (i)
var q2Part1 = document.getElementById('form-content');

console.log(q2Part1.nodeType); // 1 means Element


// Question 2 (ii)
var q2Part2 = document.getElementById('lastName');

console.log(q2Part2.nodeType);
console.log(q2Part2.childNodes);


// Question 2 (iii)
q2Part2.childNodes[0].nodeValue = "Last Name : Abdul Ghaffar";


// Question 2 (iv)
console.log(q1Part1.lastElementChild);
console.log(q1Part1.firstElementChild);


// Question 2 (v)
console.log(q2Part2.nextElementSibling);
console.log(q2Part2.previousElementSibling);


// Question 2 (vi)
console.log(q1Part5Two.parentNode)
console.log(q1Part5Two.parentNode.nodeType)