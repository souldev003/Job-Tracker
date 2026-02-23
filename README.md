## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Ans-1: #getElementById : We can access only one Element by calling getElementById. #getElementsByClassName : We can access many Element by calling getElementById. Example if we call document.getElementsByClassName("box") we can access all the element which class name is box. #querySelector : we can access the first matching element by calling it. We call them by using css selector like that: document.querySelector('.item'). #querySelectorAll : if we call any elements by querySelectorAll we can get all the elements by the class name or tagName.

### 2. How do you create and insert a new element into the DOM?

### Ans-2: we can create new element by calling createElement and put it into a variable then adding a class name or change itself innerHtml like that: const newDiv = document.createElement("div") ; newDiv.classList.add = ("box"); newDiv.innerHtml = `<h1> Hello Programmer </h1>. to append this: document.body.appendChild(newDiv);

### 3. What is Event Bubbling? And how does it work?

### Ans-3: Event Bubbling is like water wave first it will make event itself then it will do another event if their parents called for event. Like that

<div id="parent">
   <button id="child">Click Me</button>
</div>

document.getElementById("child").addEventListener("click", () => {
console.log("Button Clicked");
});

document.getElementById("parent").addEventListener("click", () => {
console.log("Parent Clicked");
});

### now we can see first Button Clicked and then Parent Clicked.

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?
