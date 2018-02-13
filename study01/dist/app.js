"use strict";
function generateColor() {
    return "#" + ((1 << 24) * Math.random() | 0).toString(16);
}
function main() {
    var appCompenent = document.getElementById('rainbow');
    setInterval(function () {
        appCompenent.style['border-color'] = generateColor();
    }, 1500);
}
