## WELCOME TO ASSIGNMENT-005 README.md FILE

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer:
 ### 1. Characteristics of **getElementById** :
 a. It Selects a single element based on its unique **id** attribute.
 b. It Returns a single Element **object**, or **null** if no element found.
 c. It is use when target is a specific, unique element.
 d. It Works fast.

 ### Characteristics of **getElementsByClassName** :
 a. It Selects all elements that matches the specified class name.
 b. It returns a live **HTMLCollection** of elements. 
 c. It is Useful for selecting multiple elements based on their class.

 ### Characteristics of **querySelector** :
 a. It Selects the first element that matches a CSS selector.
 b. It Returns a single Element **object**, or **null** if no element found.

 ### Characteristics of **querySelectorAll** :
 a. Selects all elements that match the specified CSS selector.
 b. Returns a static **NodeList** of elements.

2. How do you **create and insert a new element into the DOM**?
Answer:
  First ==> Using **document.createElement()** method to o create a new HTML element.
  second ==> set properties such as **innerHTML, id, class**
  Third==> Inserting the Element into the DOM by using **appendChild()**
Example: 
************
const history = document.getElementById('history');
const creatDiv = document.createElement('div');
       creatDiv.innerHTML = `<div class="history bg-[#fafafa] p-3 mt-5">
                    <div class="flex items-center justify-between">
                        <div class="">
                            <h2 class="font-semibold text-lg">${serviceName}</h2>
                            <p class="text-xs text-[#5C5C5C] mb-3">${serviceDept}</p>
                            <h3>${serviceNumber}</h3>
                        </div>
                        <div>${time}</div>
                    </div>
                </div>`
                history.appendChild(creatDiv);
************

3. What is **Event Bubbling** and how does it work?
Answer:
Event bubbling is a DOM mechanism where an event (like a click) first occurs on the target element and then propagates upward through its **parent, grandparent, and other ancestors**, allowing those elements to also handle the event.
## How it Works:
Get Instruction ==> The browser creates an event object and dispatches it to the target element ==> target execute first ==> Bubble to parent(the event propagates upward to the target’s parent) ==> Continue up.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer:
Event delegation in JavaScript is a technique where a single event listener is attached to a **parent element** to manage events triggered by its **child elements**, rather than adding separate event listeners to each **child**.
Usefullness:
a. Efficiency
b. Handles dynamic elements
c. Cleaner code
5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer:
**event.preventDefault()** Stops the browser’s default action for that event.
**event.stopPropagation()** Stops the event from bubbling (or capturing) further up (or down) the DOM tree.

---
