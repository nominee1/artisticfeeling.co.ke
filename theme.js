
const customizeE1 = document.querySelector('.customize-theme');
const themeE1 = document.querySelector('.theme-btn');
const spanE1 = document.querySelectorAll('.color-pallet');
const xIconE1 = document.querySelector('.x-icon');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span')


themeE1.addEventListener("click", () =>{
    customizeE1.style.display = 'grid';

})




colorPalette.forEach(color =>{
 

    color.addEventListener("click", () =>{
        if (color.classList.contains('color-1')){
            body.classList.toggle("red");
            if(body.classList.contains("red")){
                // modeText.innerText ="dark mode"
                localStorage.setItem("red", "enabled");
            
               }
               
               else{
                // modeText.innerText ="light Mode"
                localStorage.removeItem("red");
            
               }

        }else if(color.classList.contains('color-2')){

            body.classList.toggle("yellow");
        if(body.classList.contains("yellow")){
            // modeText.innerText ="dark mode"
            localStorage.setItem("yellow", "enabled");
        
           }
           
           else{
            // modeText.innerText ="light Mode"
            localStorage.removeItem("yellow");
        
           }

            // --color-top === #a38e02;

        }
        else if(color.classList.contains('color-3')){
        
            body.classList.toggle("green");
        if(body.classList.contains("green")){
            // modeText.innerText ="dark mode"
            localStorage.setItem("green", "enabled");
        
           }
           
           else{
            // modeText.innerText ="light Mode"
            localStorage.removeItem("green");
        
           }

        }
        
       
    })
    

})

function maintainMode(){
  
    if(localStorage.getItem("yellow")==="enabled"){
        body.classList.add("yellow");
    }else if(localStorage.getItem("red")==="enabled"){
        body.classList.add("red");
    }
    else if(localStorage.getItem("green")==="enabled"){
        body.classList.add("green");
    }
    
}

document.addEventListener("DOMContentLoaded", function(){
    maintainMode();
});

xIconE1.addEventListener("click", () =>{
    customizeE1.style.display = 'none';

})

