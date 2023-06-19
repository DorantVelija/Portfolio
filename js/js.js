let element = document.getElementById('aboutText2');
let element2 = document.getElementById('aboutText2a');

function buttonClick(){
    element.classList.toggle('hide');
    element2.classList.toggle('aboutText2');
}

let buttonshow = document.getElementById('showMore');
let home = document.getElementById('home')
let picNo = 0
function changeBackground() {
    picNo = picNo+1;
    if (picNo > 5) {
            picNo = 1;
        }
        home.style.backgroundImage = "url(../IMGg/homepic"+picNo+".png)";
}    
   
