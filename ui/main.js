console.log('Loaded!');

var img = document.getElementById('madi');

var mL = 0;
var mR = 0;
var mB = 0;
var mT = 0;

function move () {
    mL = mL+10;
    img.style.mL = mL + 'px';
    mB = mB+10;
    img.style.mB = mB + 'px';
    mR = mR+20;
    img.style.mR = mR + 'px';
    mT = mT+10;
    img.style.mT = mT + 'px';
    mL = mL+10;
    img.style.mL = mL + 'px';
}
function moveRight () {
    mL = mL + 10;
    img.style.mL = mL + 'px';
}
madi.onclick = function () {
    var interval = setInterval(move, 10000);
};