specArray = prompt('input duration, name, opacity, and color').split(',');
var thisName = specArray[1];
addTimedFilter(specArray[0],thisName,specArray[2],specArray[3]);
function addTimedFilter(duration,name, opacity, color)
{
alert("filter creation begun");
var div = document.createElement("div");
div.id = name; //allows removal by id
div.style.opacity = opacity;
div.style.background = color;
div.style.width = "100%";
div.style.height = "100%";
div.style.pointerEvents = "none";
div.style.zIndex = 10000; //TODO: something about this
div.style.top = 0;
div.style.left = 0;
div.style.position = "fixed";
alert("filter creation ended");
document.body.appendChild(div);

var x= setTimeout(function (){
    var overlay = document.getElementById(thisName); //removes the specified filter by id
    overlay.parentNode.removeChild(overlay);
    alert("filter delete ended");
},duration*1000);
}
