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
const startbutton = document.getElementById("start");
const startback = document.getElementById("startback");
const backimg = document.getElementById("backimage");
const subactive = document.getElementById("activeimage");

let storyMark = 0; // used to keep track of location in the story.

function resettext() {
  storytxt.innerHTML = "";
  for (let button of opbutton) {
    button.innerHTML = "";
  }
}

function disablebutton() {
  for (let button of opbutton) {
    button.setAttribute("disabled", true);
  }
  // text typing function breaks when another button is presswd while it is running. This is to ensure it finishes typing all its text before being able to press a new button.
}

startmus.play();

function begin() {
  // makes the start screen disapere when start button is clicked
  startbutton.style.display = "none";
  startback.style.display = "none";
  startmus.pause();
  waveaud.play();
  showText(
    "The Ocean streatchs out before you, as you stand on a dock. A small submarine bounces in the waves your 2 other crew memebres stand on either side of you. The door opens with and omanious hiss.",
    0,
    15,
    "story"
  );
}

function restart() {
  //restarts the story when clicked
  storymark = 0;
  startmus.play();
  startbutton.style.display = "flex";
  startback.style.display = "flex";
  startmus.play();
}

function showText(message, index, speed, element) {
  // prints the letters one at a time besed on speed
  disablebutton();
  if (index < message.length) {
    document.getElementById(element).append(message[index++]);
    setTimeout(function () {
      showText(message, index, speed, element);
    }, speed);
  } else {
    for (let button of opbutton) {
      button.removeAttribute("disabled");
    } // Ensures it gets every option button
  }
}
function inside() {
  // changes the backgound image to the insided of the submarin and remove the interactable image
  subactive.style.display = "none";
  backimg.src = "images/inside.jpg";
}

// function to determins where in the story and what happnes next depening on what button is clicked and what has already been clicked
function optionclick(opnum) {
  switch (storyMark) {
    case 0:
      if (opnum === 1) {
        resettext();
        showText(
          "You enter the submarine followed by your 2 crewmates; the door closes behind you. There is a long metal hallway, pipes and doors run along the walls and ceiling, before disappearing into the various branching hallways. At the end lies the control room which pilots the sub. ",
          0,
          15,
          "story"
        );
        showText("Pilot", 0, 50, "option 2");
        showText("Explore", 0, 50, "option 3");
        waveaud.pause();
        dooraud.play();
        inside();

        op1.style.display = "none"; // deleate the selected button so can end story easier

        storyMark = 1;
      } else if (opnum === 2) {
        resettext();
        showText(
          "Before entering the submarine and departing on a week's long journey. You decide to take a final look around, absorbing the last of dray land you will see for a while. There is an old wooden pier that the submarine is tied to, boards worn from years of exposure to the elements it ends a few meters away. The submarine itself is a brass colour, reflecting the sun, a ladder to the roof sits next to the entrance hatch.",
          0,
          15,
          "story"
        );
        showText("Ladder", 0, 50, "option 1");
        showText("Pier", 0, 50, "option 3");
        op2.style.display = "none";

        storyMark = 2;
      } else if (opnum === 3) {
        resettext();
        showText(
          " Looking to either side you can tell there is a sense of nervousness in the three of you. A tension that needs to be delt with before beginning the weeks-long journey into the depths of the sea. It is sure to bring dangers and compilations that you could not prepare for. Your crewmates glance at your way waiting for you to break the silence.",
          0,
          15,
          "story"
        );
        showText("Serious", 0, 50, "option 2");
        showText("Humorous", 0, 50, "option 1");
        op3.style.display = "none";

        storyMark = 3;
      }
      break;

    // 2nd Choice

    case 1: //what happens if option 1 is clicked 1st
      if (opnum === 2) {
        resettext();
        showText(
          "You walk to the end of the hallway, ignoring the other corridors. One of your crew disappears deeper down one of them, the other follows you to the control room. The room reveals itself; you are on a balcony with many control panels and lights, there is a ladder down that leads to more equipment and controls. There is a large window the covers both floors giving you a view of the fish and ocean floor.",
          0,
          15,
          "story"
        );
        showText("Drive", 0, 50, "option 3");
        op2.style.display = "none";

        storyMark = 4;
      } else if (opnum === 3) {
        resettext();
        showText(
          "Turning down the closest corridor, it is a short corridor leading to a rounded doorway. Going through leads to a laboratory, various machines and tools are placed into shelves along the walls. In there is countertop taking up most of the center of the room, in the middle of it is various glass container. Some contained water, in preparation for various sea creatures, others have plants, leaves trying to escape their enclosures.",
          0,
          15,
          "story"
        );
        showText("Poke", 0, 50, "option 2");
        op3.style.display = "none";

        storyMark = 5;
      }
      break;

    case 2: // what happends when option 2 is clicked 1st
      if (opnum === 1) {
        resettext();
        showText(
          "Ignoring the open hatch leading deeper into the submarine, you climb the ladder that leads to the roof. Standing on the top there is a range of equipment, a periscope in the center, various antenna and dishes that you know connect to various sensors and communication arrays inside. You sit down, the metal warm to touch as it has absorbed the midday sun. A seagull squawks, gliding down and landing next to you.",
          0,
          15,
          "story"
        );
        showText("Greet", 0, 50, "option 3");
        op1.style.display = "none";

        storyMark = 6;
      } else if (opnum === 3) {
        resettext();
        showText(
          "You walk the final few meters to the end of the pier. Taking a deep breath, the sound of the ocean is peaceful, and the sun warms your back. Looking around you hear an ominous creak followed by a crack, as the wooden board you are standing on breaks underneath you. It's age finally catching up. A shocked yell escapes you as you find gravity taking hold.",
          0,
          15,
          "story"
        );
        showText("Fall", 0, 50, "option 1");
        op3.style.display = "none";

        storyMark = 7;
      }
      break;

    case 3: // what happends when option 3 is clicked 1st
      if (opnum === 1) {
        resettext();
        showText(
          "Taking a deep breath, you say ‘We have dedicated years of our life to this submarine, the next few weeks will feel like nothing compared to that.’ Your friends chuckle and relax a bit. You smile, the tension has been broken one of them responds. ‘The hardest part will be not killing each other over the next few we.....’ They stop suddenly.  ",
          0,
          15,
          "story"
        );
        showText("Look", 0, 50, "option 2");
        op1.style.display = "none";

        storyMark = 8;
      } else if (opnum === 2) {
        resettext();
        showText(
          "Taking a deep breath, you say ‘After all these years of planning, training and practicing, we are the people in the world with the biggest chance of seceding here, so we are going to enter this boat and advance our understanding of the deep sea.’ Your crewmates, now fully looking at you simultaneously take a breath and respond.",
          0,
          15,
          "story"
        );
        showText("Listen", 0, 50, "option 1");
        op2.style.display = "none";

        storyMark = 9;
      }
      break;

    // 3rd and final choice
    case 4:
      // don't need if statment as there is only 1 button to click
      resettext();
      showText(
        "You walk over to a chair in the center of the center of the baloney and begins the startup sequence. Checking each of the systems, like the radio, searing engine and sonar. With everything working you inch the submarine forward. The engine makes a rhythmic chugging sound, you spot various sea life fleeing out of the windows view.",
        0,
        15,
        "story"
      );
      op3.style.display = "none";
      showText("Ending 1/6", 0, 50, "endings");

      break;

    case 5:
      resettext();
      showText(
        "You tap your finger on one of the empty tanks that is filled with water. There is a disturbance of sand in the bottom of the tank. You realise it is not actually empty, there is a creature burrowed in the stand that is emerging. It has many spindly legs and a long flat body. Its eyes swivel on stalks and lock on to your eyes, you feel dizzy and then nothing else.",
        0,
        15,
        "story"
      );
      op2.style.display = "none";
      showText("Ending 2/6", 0, 50, "endings");

      break;

    case 6:
      resettext();
      showText(
        "To your shock the seagull responds. Your ears hear a typical seagull squark, but you brain hears a voice. ‘Salutations human, weird boat you have’. You scramble back in shock, the gull squarks again this time no psychic voice echos and it flies off. Shaken by the experience you climb down the ladder and get ready to depart.",
        0,
        15,
        "story"
      );
      op3.style.display = "none";
      showText("Ending 3/6", 0, 50, "endings");

      break;

    case 7:
      resettext();
      showText(
        "You land in the ocean, managing to avoid the broken board and the pier on the way down. Your crewmates rush over to help, peaking their heads over the side. You begin the swim around to the ladder and haul yourself out of the water, you lie on the pier, drenched clothes weighing you down. The cool breeze that was so pleasant a moment ago now chills you. This is not a good sign for the journey ahead.",
        0,
        15,
        "story"
      );
      op1.style.display = "none";
      showText("Ending 4/6", 0, 50, "endings");
      break;

    case 8:
      resettext();
      showText(
        "Quickly you look around for your crewmates, as they are cut off in mid-sentence due to them not existing anymore. No indication of how, just one moment they are there and the next not. You look at your remaining friend, finding yourself alone. Like neither of them ever existed. It is just you, the ocean and a massive submarine you will not be able to pilot by yourself.",
        0,
        15,
        "story"
      );
      waveaud.pause();
      op2.style.display = "none";
      showText("Ending 5/6", 0, 50, "endings");

      break;

    case 9:
      resettext();
      showText(
        "Your crewmates respond simultaneously. ‘You will not be making it to the deep sea, humanities plans of exploration were doomed from the start.’ Tentacles start emerging from their mouths. You try to sprint away but find you are rooted to the ground. They continue, ‘You will enter the vessel with us, and you will never be seen again.’ You begin walking against your will into the submarine and the hatch closes behind the 3 of you.",
        0,
        15,
        "story"
      );
      op1.style.display = "none";
      dooraud.play();
      showText("Ending 6/6", 0, 50, "endings");
      inside();

      break;
  }
}

// contines code for the animation and movments
const subhonk = document.getElementById("subhonk");

let butactic = true; // used to tell wether sidebar is open or not
// Function to animate the sliding of the attbution list on and off the screen
function resorce() {
  let id = null;
  pos = butactic ? 0 : 44;
  if (butactic) {
    // animation to open side pannel
    restxt.style.display = "block";
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 44) {
        clearInterval(id);
      } else {
        pos++;
        restxt.style.width = pos + "%";
      }
      butactic = false;
    }
  } else {
    // animation to closes side pannel
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 0) {
        restxt.style.display = "none";
        clearInterval(id);
        butactic = true;
      } else {
        pos--;
        restxt.style.width = pos + "%";
      }
    }
  }
}

let subbut = true;

function subnoise() {
  // dunction to play nois when submarine is clicked.
  subhonk.play();

  if (subbut) {
    // activate and deactivate the aniamation depending if it is active or not
    subbut = false;
    submouse = setInterval(subanimate, 170);
  } else {
    clearInterval(submouse);
    subbut = true;
  }
}

direction = 1;
let possub = 35;

function subanimate() {
  // function to make the submarine move up and down in the waves when it is clicked.

  if (possub >= 38) {
    direction = -1;
  } else if (possub <= 32) {
    direction = 1;
  }
  possub += direction; // adds 1 to postition dpendong on the direction it is moving
  subactive.style.bottom = possub + "%";
  console.log(possub);
}
