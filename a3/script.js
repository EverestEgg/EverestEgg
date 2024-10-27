startmus = document.getElementById("startmus");
storytxt = document.getElementById("story")
opbutton = document.getElementsByClassName("option");
op1 = document.getElementById("option 1");
op2 = document.getElementById("option 2");
op3 = document.getElementById("option 3");

let storyMark = 0; // Varibuls used to keep track of location in the story. 

function resettext() {
    storytxt.innerHTML = "";
    for (let button of opbutton) {
        button.innerHTML = "";
    }
}

function disablebutton(){
    for (let button of opbutton) {
        button.setAttribute("disabled", true);
    }

}



// startmus.play(); // start music when site loads (Remove form comment when finished)


function begin(){ // makes the start screen disapere when start button is clicked
 startbutton = document.getElementById("start");
 startback = document.getElementById("startback");
    startbutton.style.display = "none";
    startback.style.display = "none";
    startmus.pause();
    showText("The Ocean streatchs out before you, as you stand on a dock. A small submarine bounces in the waves your 2 other crew memebres stand on either side of you. The door opens with and omanious hiss."
     , 0, 15, "story");
    
}

function showText(message, index, speed, element) { // prints the letters one at a time besed on speed 
    disablebutton();
    if (index < message.length) {
     document.getElementById(element).append(message[index++]);
      setTimeout(function() {
        showText(message, index, speed, element);
      }, speed);
    } else {
      
        for (let button of opbutton) {
            button.removeAttribute("disabled");
        } // Ensures it gets every option button

    }
}

// function to determins were in the story and what happnes next depening on what button is clicked
function optionclick(opnum){
    switch(storyMark){

    case 0:
        if(opnum === 1){
            resettext();
            showText("You enter the subarine followed by your 2 crewmates", 0, 15, "story");
            showText("Pilot", 0, 50, "option 2");
            showText("Explore", 0, 50, "option 3");
            op1.style.display = "none"; // deleate the selected button so can end story easier

            storyMark = 1;

        } else if (opnum === 2){
            resettext();
            showText("You turn and start jogging away form the pire, with you stunned crewmates watching you go ", 0, 15, "story");
            showText("Hmmmm", 0, 50, "option 1");
            showText("Sus", 0, 50, "option 3");
            op2.style.display = "none";

            storyMark = 2;

        } else if (opnum === 3){
         //    kill button 3

            storyMark = 3;
        }
    break;

    // 2nd Choises 

    case 1: //what happens if option 1 is clicked 1st
        if(opnum === 2){

        } else if(opnum === 3) {

        }
    break;

    case 2: // what happends when option 2 is clicked 1st

        if(opnum === 1){

        } else if(opnum === 3) {

        }
    break;

    case 3: // what happends when option 3 is clicked 1st

        if(opnum === 1){

        } else if(opnum === 2) {

        }
    break;

    // final Choices

    // 6 endings 



}

}
