// contines code for the animation and movments
const subhonk = document.getElementById("subhonk");
const subactive = document.getElementById("activeimage");

let butactic = true; // used to tell wether sidebar is open or not
// Function to animate the sliding of the attbution list on and off the screen
function resorce(){
    let id = null;
    pos = butactic ? 0 : 44;
 if (butactic){ // animation to open side pannel
  restxt.style.display = "block";
 clearInterval(id);
 id = setInterval(frame, 5);
 function frame() {
   if (pos == 44) {
     clearInterval(id);
   }  else {
     pos++;
     restxt.style.width = pos + '%';
   }
 butactic = false;
}
 } else { // animation to closes side pannel
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 0) {
        restxt.style.display = "none";
       clearInterval(id);
       butactic = true;
      }  else {
        pos --;
        restxt.style.width = pos + '%';
    }   
   }  
 } 
}

let subbut = true;


function subnoise(){ // dunction to play nois when submarine is clicked.
    subhonk.play();

    if (subbut){ // activate and deactivate the aniamation depending if it is active or not
       subbut = false;  
       submouse = setInterval(subanimate, 170);
    } else {
        clearInterval(submouse);
       subbut = true;
    }
}

direction = 1;
let possub = 35;

function subanimate() { // function to make the submarine move up and down in the waves when it is clicked. 

    if (possub >= 38) {
       direction = -1; 
   } else if (possub <= 32) {
      direction = 1;
   }
possub += direction; // adds 1 to postition dpendong on the direction it is moving
subactive.style.bottom = possub + "%";
console.log(possub);
}

// function to fade the start screen and button that I couldne't get working

// let ocupas = 100;
// let fade = setInterval(fadeout, 2000);
// startbutton = document.getElementById("start");
// startback = document.getElementById("startback");

// function beginani(){

//     fade = setInterval(fadeout,2000);

//     function fadeout(){
//         if (ocupas == 0) {
//             startbutton.style.display = "none";
//             startback.style.display = "none";
//            clearInterval(fade);
//           }  else {
//             pos --;
//             startbutton.style.width = ocupas + '%';
//             startback.style.width = ocupas + '%';
//         }   

//     }

// }



