console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "New Value";
//move the image
var img = document.getElementById("prashant");
var marginLeft=0;
function moveright()
{
    marginLeft= marginLeft + 5 ;
image.style.marginLeft =marginLeft+ "px";
}
img.onclick = function(){
    
    var interval=setInterval(moveRight, 50);
    
};
