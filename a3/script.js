startmus = document.getElementById("startmus");

let storyMark = 0; // Varibuls used to keep track of location in the story. 

// startmus.play(); // start music when site loads (Remove form comment when finished)


function begin(){ // makes the start screen disapere when start button is clicked
 startbutton = document.getElementById("start");
   startback = document.getElementById("startback");

    startbutton.style.display = "none";
    startback.style.display = "none";
    startmus.pause();
    showText("The Ocean streatchs out before you, as you stand on a dock. A small submarine bounces in the waves your 2 other crew memebres stand on either side of you. The door opens with and omanious hiss."
     , 0, 15);
}

function showText(message, index, speed) { // prints the letters one at a time besed on speed 
    if (index < message.length) {
      document.getElementById("story").append(message[index++]);
      setTimeout(function() {
        showText(message, index, speed,);
      }, speed);
    } else {
        // Finish printing letters
    }
}

// function to determian the story and what happens when--


function optionclick(opnum){
    switch(storyMark){

    case 0:
        if(opnum === 1){
            console.log("option 1 clicked");
        } else if (opnum === 2){
            console.log("option 2 clicked");
        } else if (opnum === 3){
            console.log("option 3 clicked");
        }
    break;


    }
}


