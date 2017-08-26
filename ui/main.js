console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "New Value";
//move the image
var img = document.getElementById("prashant");
img.onclick = function(){
    var interval=setInterval(moveRight, 100);
    
};
