function showMap(button) {
    let iframe = button.nextElementSibling;

    // toggle the display of the iframe
    iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
}
/*The expression iframe.style.display === 'none' ? 'block' : 'none' is called a ternary operator. It is a shorthand way of writing an if-else statement. It evaluates the condition iframe.style.display === 'none', which checks whether the CSS display property of the iframe is set to 'none'. If the condition is true, it returns the value 'block', indicating that the iframe should be displayed. If the condition is false, it returns the value 'none', indicating that the iframe should be hidden.*/


