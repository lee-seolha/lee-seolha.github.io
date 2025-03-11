// Read cookies
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Set cookies
function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

// Set initial colors
function setColors() {
    const strForecolour = getCookie("forecolour") || "#000";
    const strBackcolour = getCookie("backcolour") || "#FFF";

    document.getElementById('dynamic-styles').innerHTML = `body, legend, a { color: ${strForecolour}; background: ${strBackcolour}; }`;

    document.getElementById('foreground').value = strForecolour;
    document.getElementById('background').value = strBackcolour;
}

// Change colors and set cookies
function changeColors(event) {
    event.preventDefault();

    const strForecolour = document.getElementById('foreground').value;
    const strBackcolour = document.getElementById('background').value;

    setCookie("forecolour", strForecolour, { 'max-age': 3600 * 24 * 365 });
    setCookie("backcolour", strBackcolour, { 'max-age': 3600 * 24 * 365 });

    setColors();
}

document.addEventListener('DOMContentLoaded', (event) => {
    setColors();
    document.getElementById('colourpicker').addEventListener('submit', changeColors);
});