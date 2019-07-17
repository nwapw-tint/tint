name = "tint-"+"salmon"
color = "#000"
opacity = 0.6;
duration = 100;
text = "English HW 3:27";

if(document.querySelector('[id^="tint-"]') == null)
{
    console.log("no existing filter found, adding another");
    var body = document.body;
    var tintDiv = document.createElement("div");
    var textDiv = document.createElement("div");
    tintDiv.id = name; //allows removal by id
    tintDiv.style.opacity = opacity;
    tintDiv.style.background = color;
    styleTint(tintDiv);
    styleText(text);
    body.style.height = "100%";
    body.style.margin = 0;
    body.style.padding = 0;
    body.appendChild(tintDiv);
    tintDiv.appendChild(textDiv);
    setTimeout(function (){
        var overlay = document.getElementById(name); //removes the specified filter by id
        overlay.parentNode.removeChild(overlay);
        },duration*1000);

}else{console.log("An existing filter was found.")}
function styleText(text)
{
    textDiv.style.position = "absolute";
    textDiv.style.top = "50%";
    textDiv.style.left = "50%";
    textDiv.style.marginRight = "-50%";
    textDiv.style.transform="translate(-50%, -50%)";
    textDiv.style.backgroundColor = "black";
    textDiv.style.color = "#ff69b4" //TODO: set automatically based on tint shade
    textDiv.style.fontSize = "240px" //TODO: self adjusting size. rn, just set a cap
    textDiv.style.zIndex = 100;
    textDiv.innerHTML = "read pg. 64, 65";
}
function styleTint(div) {
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.pointerEvents = "none";
    div.style.zIndex = 10000; //TODO: something about this
    div.style.top = 0;
    div.style.left = 0;
    div.style.position = "fixed";
    div.style.display = "inline-block";
}
