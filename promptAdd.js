/*specArray = prompt('input duration, name, opacity, and color').split(',');
var thisName = specArray[1];
addTimedFilter(specArray[0],thisName,specArray[2],specArray[3]);
//adds a filter to the screen for the specified duration. Only works on current page.
function addTimedFilter(duration,name, opacity, color)
{ */
name = "tint-"+"salmon"
color = "#fa8072"
opacity = 0.3;
duration = 5;
if(document.querySelector('[id^="tint-"]') == null)
{
    console.log("no existing filter found, adding another");
    var tintDiv = document.createElement("div");
    tintDiv.id = name; //allows removal by id
    tintDiv.style.opacity = opacity;
    tintDiv.style.background = color;
    makeTint(tintDiv);
    document.body.appendChild(tintDiv);

    setTimeout(function (){
        var overlay = document.getElementById(name); //removes the specified filter by id
        overlay.parentNode.removeChild(overlay);
        },duration*1000);
}else{console.log("An existing filter was found.")}
function makeTint(div) {
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.pointerEvents = "none";
    div.style.zIndex = 10000; //TODO: something about this
    div.style.top = 0;
    div.style.left = 0;
    div.style.position = "fixed";
}
//}
