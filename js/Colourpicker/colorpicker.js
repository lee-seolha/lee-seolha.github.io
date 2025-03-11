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
    const strForecolour = getCookie("forecolour") || "#000000";
    const strBackcolour = getCookie("backcolour") || "#FFFFFF";

    document.getElementById('dynamic-styles').innerHTML = `body, legend, a { color: ${strForecolour}; background: ${strBackcolour}; }`;

    document.getElementById('foreground-colour').value = strForecolour;
    document.getElementById('background-colour').value = strBackcolour;
}

// Change colors and set cookies
function changeColors(event) {
    event.preventDefault();

    const strForecolour = document.getElementById('foreground-colour').value;
    const strBackcolour = document.getElementById('background-colour').value;

    setCookie("forecolour", strForecolour, { 'max-age': 3600 * 24 * 365 });
    setCookie("backcolour", strBackcolour, { 'max-age': 3600 * 24 * 365 });

    setColors();
}

document.addEventListener('DOMContentLoaded', (event) => {
    setColors();
    document.getElementById('colourpicker').addEventListener('submit', changeColors);
});


// // Read cookies
// function getCookie(name) {
//     let matches = document.cookie.match(new RegExp(
//         "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//     ));
//     return matches ? decodeURIComponent(matches[1]) : undefined;
// }

// // Set cookies
// function setCookie(name, value, options = {}) {
//     options = {
//         path: '/',
//         ...options
//     };

//     if (options.expires instanceof Date) {
//         options.expires = options.expires.toUTCString();
//     }

//     let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

//     for (let optionKey in options) {
//         updatedCookie += "; " + optionKey;
//         let optionValue = options[optionKey];
//         if (optionValue !== true) {
//             updatedCookie += "=" + optionValue;
//         }
//     }

//     document.cookie = updatedCookie;
// }

// // Set initial colors
// function setColors() {
//     const strForecolor = getCookie("forecolor") || "#000";
//     const strBackcolor = getCookie("backcolor") || "#FFF";

//     document.getElementById('dynamic-styles').innerHTML = `body, legend, a { color: ${strForecolor}; background: ${strBackcolor}; }`;

//     document.getElementById('foreground').value = strForecolor;
//     document.getElementById('background').value = strBackcolor;
// }

// // Change colors and set cookies
// function changeColors(event) {
//     event.preventDefault();

//     const strForecolor = document.getElementById('foreground').value;
//     const strBackcolor = document.getElementById('background').value;

//     setCookie("forecolor", strForecolor, { 'max-age': 3600 * 24 * 365 });
//     setCookie("backcolor", strBackcolor, { 'max-age': 3600 * 24 * 365 });

//     setColors();
// }

// document.addEventListener('DOMContentLoaded', (event) => {
//     setColors();
//     document.getElementById('colorpicker').addEventListener('submit', changeColors);
// });