1. How did you dynamically create and append new elements to the DOM?
    * I created a template HTML that had all the elements I wanted to create and append, then I cloned it to make a new row with the new values entered from the user.
2. What steps did you take to ensure accurate updates to the total price?
 * I fired off an event that updates the total price whenever an action was performed
3. How did you handle invalid input for product name or price?
 * I turned the string into a Number() object, then used a Number method called Number.isNan() which checks if the input is valid or not
4. What challenges did you face when implementing the remove functionality?
 * I had to figure out how to remove the row of the called element in question, which my button was nested within a few divs. I used a function .closest() then checked for the closest tr element, which finds its own parent tr element then I call .remove() on that tr. I had an issue where I was overwriting the base price of a product and it messes up the logic with price and quantity and the total price.