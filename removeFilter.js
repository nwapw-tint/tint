function removeFilter(id)
{
//bridge piece
var overlay = document.getElementById(filterId); //removes the specified filter by id
overlay.parentNode.removeChild(overlay);
}