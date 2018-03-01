console.log('Loaded!');

var img = document.getElementById('madi');

var marginLeft = 0;
var marginRight = 0;
var marginBottom = 0;
var marginTop = 0;

function move () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
    marginBottom = marginBottom + 100;
    img.style.marginBottom = mB + 'px';
    marginRight = marginRight + 200;
    img.style.marginRight = marginRight + 'px';
    marginTop = marginTop + 100;
    img.style.marginTop = marginTop + 'px';
    marginLeft = marginLeft + 100;
    img.style.marginLeft = marginLeft + 'px';
}
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(move, 1000);
};