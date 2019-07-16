/*chrome.browserAction.onClicked.addListener(function(tab) {
alert("!")
var div = document.createElement("p");
div.style.width = "1000px";
div.style.height = "1000px";
div.style.opacity = 1;
div.style.zIndex = 1;
div.style.background = "red";
div.style.color = "white";
div.innerHTML = "Hello";
document.body.appendChild(div);
alert(div.style.background);
});*/
/*var div = document.createElement("div");
div.id = "hello"; //allows removal by id
div.style.opacity = 0.3;
div.style.background = "#00ff00";
div.style.width = "100%";
div.style.height = "100%";
div.style.pointerEvents = "none";
div.style.zIndex = 10000; //TODO: something about this
div.style.top = 0;
div.style.left = 0;
div.style.position = "fixed";
document.body.appendChild(div);*/
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
alert("please");
specArray = prompt("input duration, name, opacity, and color").split(',');
addTimedFilter(10, "hi", 0.3, "#ff00ff");//TODO: input checking
});
function addTimedFilter(duration,id, opacity, color)
{
alert("filter creation begun");
var div = document.createElement("div");
div.id = id; //allows removal by id
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
setTimeout(function removeFilter(id)
{
alert("filter delete begun");
alert(id);
var overlay = document.getElementById(id); //removes the specified filter by id
overlay.parentNode.removeChild(overlay);
alert("filter delete ended");
}, duration*1000);
}