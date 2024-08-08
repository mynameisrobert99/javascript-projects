// Write your JavaScript code here.
// Remember to pay attention to page loading!
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const itemInput = document.getElementById('item-input');
    const itemList = document.getElementById('item-list');

    // Add an event listener to the button
    addButton.addEventListener('click', () => {
        const itemText = itemInput.value.trim();
        
        // If the input is not empty, create a new list item
        if (itemText !== '') {
            const li = document.createElement('li');
            li.textContent = itemText;
            itemList.appendChild(li);

            // Clear the input field after adding the item
            itemInput.value = '';
        }
    });
});
