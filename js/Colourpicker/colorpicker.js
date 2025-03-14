document.addEventListener('DOMContentLoaded', (event) => {
// Function to get cookie value by name
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\/\\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Function to set cookie
function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
}

const foreColorPicker = document.getElementById('foreground-color-picker');
const backColorPicker = document.getElementById('background-color-picker');

// Update the color preferences when the user selects a color
foreColorPicker.addEventListener('input', (event) => {
    forecolor = event.target.value;
    setCookie('forecolour', forecolor);
    document.documentElement.style.setProperty('--foreground-color', forecolor);
});

backColorPicker.addEventListener('input', (event) => {
    backcolor = event.target.value;
    setCookie('backcolour', backcolor);
    document.documentElement.style.setProperty('--background-color', backcolor);
});

// Reset button functionality
document.getElementById('reset-button').addEventListener('click', resetColors);

// Function to reset colors to the original website styles
function resetColors() {
    // Clear the cookies
    document.cookie = "forecolour=; path=/; max-age=0";
    document.cookie = "backcolour=; path=/; max-age=0";

    // Reset the colors by removing custom CSS variables
    document.documentElement.style.removeProperty('--foreground-color');
    document.documentElement.style.removeProperty('--background-color');

    // Optionally, reset other styles like text or background color (if you're setting those in CSS)
    // This will allow the website to return to the default colors as defined in the website's CSS
    // (where they are initially set in the styles, e.g., in styles.css)
    document.body.style.color = '';  // Resets any inline styles for foreground
    document.body.style.backgroundColor = '';  // Resets any inline styles for background

    // Reset the color pickers to their initial values
    document.getElementById('foreground-color-picker').value = '#000000';
    document.getElementById('background-color-picker').value = '#FFFFFF';
}
});