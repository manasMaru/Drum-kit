 //detecting button press.
 var numberOfDrumButtons=document.querySelectorAll(".drum").length;
 for(var i=0;i<numberOfDrumButtons;i++){
 document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
 }


//detecting keyboar press.
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){

    switch (key) {
        case"w":
        var tom3=new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;


        case"a":
        var tom4=new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;
        


        case"s":
        var kick_bass=new Audio("./sounds/kick-bass.mp3");
        kick_bass.play();
        break;
        


        case"d":
        var snare=new Audio("./sounds/snare.mp3");
        snare.play();
        break;
        


        case"j":
        var crash=new Audio("./sounds/crash.mp3");
        crash.play();
        break;
        


        case"k":
        var tom1=new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;



        case"l":
        var tom2=new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
        
        

        default:console.log(buttonInnerHTML);


    }
}


function buttonAnimation(currentKey){
    var activeButton=document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);//100miliseaconds
}