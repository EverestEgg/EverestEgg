// contines the contorles for the text and some audio

const startmus = document.getElementById("startmus");
const storytxt = document.getElementById("story");
const opbutton = document.getElementsByClassName("option");
const op1 = document.getElementById("option 1");
const op2 = document.getElementById("option 2");
const op3 = document.getElementById("option 3");
const end = document.getElementById("endings");
const resbtn = document.getElementById("resourcebtn");
const restxt = document.getElementById("resorcetxt");
const waveaud = document.getElementById("wavesau");
const dooraud = document.getElementById("doorau");

let storyMark = 0; // used to keep track of location in the story. 

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
// text typing function breaks when another button is presswd while it is running. This is to ensure it finishes typing all its text before being able to press a new button. 
}

startmus.play();

function begin(){ // makes the start screen disapere when start button is clicked
    startbutton = document.getElementById("start");
    startback = document.getElementById("startback");
    startbutton.style.display = "none";
     startback.style.display = "none";
    startmus.pause();
    waveaud.play(); 
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

// function to determins where in the story and what happnes next depening on what button is clicked and what has already been clicked
function optionclick(opnum){
    switch(storyMark){

    case 0:
        if(opnum === 1){
            resettext();
            showText("You enter the subarine followed by your 2 crewmates, the door hiss", 0, 15, "story");
            showText("Pilot", 0, 50, "option 2");
            showText("Explore", 0, 50, "option 3");
            waveaud.pause();
            dooraud.play();

            op1.style.display = "none"; // deleate the selected button so can end story easier

            storyMark = 1;

        } else if (opnum === 2){
            resettext();
            showText("Exolre the area", 0, 15, "story");
            showText("Hmmmm", 0, 50, "option 1");
            showText("Sus", 0, 50, "option 3");
            op2.style.display = "none";

            storyMark = 2;

        } else if (opnum === 3){ 
            resettext();
            showText("Looking to you side you see your crewmates doing the same. Their is a nervousness across all 3 of you. They seem to we wating for you to sat something.", 0, 15, "story");
            showText("Serious", 0, 50, "option 2");
            showText("Humerous", 0, 50, "option 1");
            op3.style.display = "none";

            storyMark = 3;
        }
    break;

    // 2nd Choice

    case 1: //what happens if option 1 is clicked 1st
        if(opnum === 2){
            resettext();
            showText("well there is something happening", 0, 15, "story");
            showText("Drive", 0, 50, "option 3");
            op2.style.display = "none";

            storyMark = 4;

        } else if(opnum === 3) {
            resettext();
            showText("something else happended", 0, 15, "story");
            showText("End", 0, 50, "option 2");
            op3.style.display = "none";

            storyMark = 5;

        }
    break;

    case 2: // what happends when option 2 is clicked 1st

        if(opnum === 1){
            resettext();
            showText("You clicked 2 and 1", 0, 15, "story");
            showText("End 3", 0, 50, "option 3");
            op1.style.display = "none";

            storyMark = 6;

        } else if(opnum === 3) {
            resettext();
            showText("argh 1 nad 3 clicked", 0, 15, "story");
            showText("the final button", 0, 50, "option 2");
            op2.style.display = "none";

            storyMark = 7;

        }
    break;

    case 3: // what happends when option 3 is clicked 1st

        if(opnum === 1){
            resettext();
            showText("argh 3 nad 1 clicked", 0, 15, "story");
            showText("the final button", 0, 50, "option 2");
            op2.style.display = "none";

            storyMark = 8;
            
        } else if(opnum === 2) {
            resettext();
            showText("argh 3 nad 2 clicked", 0, 15, "story");
            showText("the final button", 0, 50, "option 1");
            op1.style.display = "none";

            storyMark = 9;

        }
    break;

    case 4:
        // don't need if statment as there is only 1 button to click
        resettext();
        showText("Endeding 1", 0, 15, "story");
        op3.style.display = "none";
        showText("Ending 1/6", 0, 50, "endings");

    break;

    case 5:
        resettext();
        showText("Endeding 1", 0, 15, "story");
        op3.style.display = "none";
        showText("Ending 2/6", 0, 50, "endings");

    break;

    case 6:
        resettext();
        showText("Endeding 1", 0, 15, "story");
        op3.style.display = "none";
        showText("Ending 3/6", 0, 50, "endings");

    break;

    case 7:
        resettext();
        showText("Endeding 1", 0, 15, "story");
        op3.style.display = "none";
        showText("Ending 4/6", 0, 50, "endings");

    break;

    case 8:
        resettext();
        showText("Endeding 1", 0, 15, "story");
        op3.style.display = "none";
        showText("Ending 5/6", 0, 50, "endings");

    break;

    case 9:
        resettext();
        showText("Endeding 1", 0, 15, "story");
        op3.style.display = "none";
        showText("Ending 6/6", 0, 50, "endings");

    break;

}

}
