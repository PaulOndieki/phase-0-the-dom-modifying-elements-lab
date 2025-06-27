// Write your code here!
// 1. Remove the <main> element
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// 2. Create a new <h1> element
const newHeader = document.createElement('h1');

// 3. Set its id to "victory"
newHeader.id = 'victory';

// 4. Set its text content (replace "YOUR-NAME" with your real name)
newHeader.textContent = 'YourName is the champion'; // <-- Replace "YourName" with your actual name

// 5. Append it to the body
document.body.appendChild(newHeader);
