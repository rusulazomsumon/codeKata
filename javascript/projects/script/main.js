// var keyVal = document.getElementById("key").value;
// console.log(keyVal);

// getting the button value 
var keyVal = document.addEventListener("click",getBtnVal);
//defining the getBtnVal function 
function getBtnVal(){
    var btnKeyVal = document.getElementById("key").value;
    console.log(btnKeyVal);
}

// showing the value 
var scrnText = document.getElementById("screen");
scrnText.innerHTML = keyVal;

// link: https://www.youtube.com/watch?v=j59qQ7YWLxw