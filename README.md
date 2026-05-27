Social Bio Link Builder - Section A

Section A: Concept Application
Theme: Social Bio Link Builder (Creator Profile)

1. JavaScript execution, scope, and DOM selection
In my project, JavaScript execution begins after the HTML document 
is loaded. DOM elements such as form inputs and buttons are 
selected using methods like getElementById and querySelector.

Variables declared using let and const ensure proper scoping and 
controlled reassignment. These variables hold references to DOM 
elements and application data throughout the lifecycle of the app.

The UI is state-driven, meaning it is rendered based on the 
application state stored in the formData array. When the page 
loads, JavaScript reads stored data from localStorage and 
dynamically builds the UI using DOM manipulation, ensuring the 
interface always reflects the current state.

2. Verified Creator badge logic
The “Verified Creator” badge is controlled using conditional logic 
based on follower count.

If the follower count exceeds a defined threshold, the badge is 
displayed; otherwise, it is hidden.

This is achieved using conditional (ternary) operators and DOM 
rendering.

Truthy and falsy evaluation helps determine whether the badge 
should appear.

Whenever the underlying data changes, the UI is re-rendered, 
ensuring the badge always reflects the current application state.

3. Arrays, loops, and template literals
All social links are stored in an array of objects called 
formData.

Each object contains structured data such as title, URL, and 
follower count.

To render the UI, I use the forEach loop to iterate through the 
array and dynamically generate HTML using template literals.

This approach allows scalable rendering of multiple links without 
manually writing HTML for each item.

Template literals make it easy to embed JavaScript values directly 
into HTML structure, ensuring clean and dynamic UI generation.

4. LocalStorage and data persistence
To persist data across page reloads, the application uses 
localStorage.

Data is stored after converting the array into a string using 
JSON.stringify, and restored using JSON.parse when the page loads.

The formData array acts as the single source of truth for the 
application. Both the UI rendering and localStorage depend on this 
central state, ensuring consistency across the application.

If this synchronization is missed, the application becomes 
stateless and user data is lost after refresh.

5. Delete functionality and event handling
Each link includes a delete button that allows users to remove 
items instantly without refreshing the page.

This is achieved using event handling and the dataset attribute to 
identify which item should be removed.

When a delete action is triggered, the corresponding item is 
removed from the formData array, localStorage is updated, and the 
UI is re-rendered immediately.

This ensures real-time updates based on changes in application 
state.

6. Modular JavaScript (scalability concept)
As applications grow in complexity, maintaining all logic in a 
single file becomes difficult.

Modular JavaScript solves this by separating concerns into 
different files such as:
- form handling module
- storage module
- UI rendering module
- validation module

Using export and import, functionality can be reused across 
different parts of the application.

This improves maintainability, scalability, readability, and 
debugging efficiency in large applications.


