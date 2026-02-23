## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Ans-1: #getElementById : We can access only one Element by calling getElementById. #getElementsByClassName : We can access many Element by calling getElementById. Example if we call document.getElementsByClassName("box") we can access all the element which class name is box. #querySelector : we can access the first matching element by calling it. We call them by using css selector like that: document.querySelector('.item'). #querySelectorAll : if we call any elements by querySelectorAll we can get all the elements by the class name or tagName.

### 2. How do you create and insert a new element into the DOM?

Ans-2: we can create new element by calling createElement and put it into a variable then adding a class name or change itself innerHTML.

### 3. What is Event Bubbling? And how does it work?

### Ans-3: Event Bubbling is like water wave first it will make event itself then it will do another event if their parents called for event.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Ans-4: Event Delegation is to control many children by handling their parent.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans-5:
