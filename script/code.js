
let red = document.querySelector('[data-in1]').value
let green = document.querySelector('[data-in2]').value
let blue = document.querySelector('[data-in3]').value
let hexValue = rgbToHex(red, green, blue);

function rgbToHex(red, green, blue) {
    red = Math.min(255, Math.max(0, red));
    green = Math.min(255, Math.max(0, green));
    blue = Math.min(255, Math.max(0, blue));
    let redHex = (red < 16 ? '0' : '') + red.toString(16);
    let greenHex = (green < 16 ? '0' : '') + green.toString(16);
    let blueHex = (blue < 16 ? '0' : '') + blue.toString(16);
    let hexColor = '#' + redHex + greenHex + blueHex;
    return hexColor.toUpperCase(); 
}

let btn = document.querySelector('[data-btn]')
btn.addEventListener('click' , rgbToHex)

let dispAns = document.querySelector('[data-output]')
dispAns.innerHTML = hexValue