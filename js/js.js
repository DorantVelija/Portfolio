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
    picNo = picNo ++ ;
    if(picNo>6){
    picNo = 0 
}    
    home.style.backgroundImage = "url(../IMGg/homepic"+picNo+".png)";
}