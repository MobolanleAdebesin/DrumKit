// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick(){
//    alert("I got clicked");
//  }

// document.querySelectorAll("button").addEventListener("click", function(){
//   alert("I got clicked");
// }
// );
// This is another way of writing the same function as above, but the function
//has no name in this case. Its just an anonymous function that tells the button
//what to do when a click occurs

var buttons = document.querySelectorAll(".drum");
//This function animates the button when it is pressed

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}

//If a button is PRESSED, the value of that button is passed into the "makeSound" function and a corresponding sound is played if the value is one of the specified values (WASDJKL).
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

//This function is responsible for playing a sound when the correct value is selected
function makeSound(key){
  switch (key){
    case "w":
    var tom1 = new Audio('tom-1.mp3');
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio('tom-2.mp3');
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio('tom-3.mp3');
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio('tom-4.mp3');
    tom4.play();
    break;

    case "j":
    var snare = new Audio('snare.mp3');
    snare.play();
    break;

    case "k":
    var crash = new Audio('crash.mp3');
    crash.play();
    break;

    case "l":
    var kick = new Audio('kick-bass.mp3');
    kick.play();
    break;

    default: console.log(key);

  }
}
//When the button is CLICKED that button's value is passed into the "makeSound" function and the corresponding sound is played if the button is one that has been specified.
for(var i = 0; i <= buttons.length; i++){
  buttons[i].addEventListener("click", function(){

var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
});

}
