let københavnBillede;
let button1;
let button2;
let button3;
let button4;
let button5;

let buttonContinue

let buttonContinue2

let button6;
let button7;

let button8;
let button9;

let storyState = "slide1";

let RådhusBillede;
let GAMEOVERbillede;
let CPHsong;



function preload() {
  københavnBillede = loadImage('pictures/Brand.png');
  GAMEOVERbillede = loadImage('pictures/GAMEOVER.png');
  RådhusBillede = loadImage('pictures/Rådhus.png');
  CPHsong = loadSound('music/København.mp3');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  

  button1 = createButton("Start");
  button1.position(850, 500);
  button1.size(50, 25);
  button1.mousePressed(button1event);

  button2 = createButton("About");
  button2.position(850, 550);
  button2.size(50, 25);
  button2.mousePressed(button2event);

  button3 = createButton("Back");
  button3.position(850, 550);
  button3.size(50, 25);
  button3.mousePressed(button3event);
  
  button4 = createButton("A");
  button5 = createButton("B");

  buttonContinue = createButton("Continue");
  buttonContinue.position(850, 750);
  buttonContinue.size(textWidth("Continue") + 20, 25); // Adjust size to fit text
  buttonContinue.mousePressed(buttonContinueevent);

  buttonContinue2 = createButton("Continue");
  buttonContinue2.position(850, 800);
  buttonContinue2.size(textWidth("Continue") + 20, 25); // Adjust size to fit text
  buttonContinue2.mousePressed(buttonContinue2event);

  button6 = createButton("A");
  button6.position(850, 500);
  button6.size(50, 25);
  button6.mousePressed(button6event);

  button7 = createButton("B");
  button7.position(850, 550);
  button7.size(50, 25);
  button7.mousePressed(button7event);

  button8 = createButton("A");
  button8.position(850, 500);
  button8.size(50, 25);
  button8.mousePressed(button8event);

  button9 = createButton("B");
  button9.position(850, 550);
  button9.size(50, 25);
  button9.mousePressed(button9event);
}

function draw() {
  console.log(storyState);
  if (storyState == "slide1") {
    showKapitel1();
  } else if (storyState == "slide2") {
    showKapitel2();
  } else if (storyState == "slide3") {
    showKapitelAbout();
  } else if (storyState == "slide4") {
    showKapitel4();
  } else if (storyState == "slide5") {
    showKapitel5();
  } else if (storyState == "slideSLUT1") { // Corrected string literal
    showKapitelSlut1();
  } else if (storyState == "slideSLUT2") { // Corrected string literal
    showKapitelSlut2();
  } else if (storyState == "slide6") { // Corrected string literal
    showKapitel6();
  } else if (storyState == "slide7") { // Corrected string literal
    showKapitel7();
  } else if (storyState == "slide8") {  // Corrected string literal
    showKapitel8(); }
}

function button1event() {
  storyState = "slide2";
  button1.hide();
}
function button2event() {
  storyState = "slide3";
  button2.hide();
}
function button3event() {
  storyState = "slide1";
  button3.hide();

}
function button4event() {
  storyState = "slide5";
  button4.hide();
}

function button5event() {
  storyState = "slide4";
  button5.hide();
}
function buttonContinueevent() {
  storyState = "slide6";
  buttonContinue.hide();



}
function buttonContinue2event() {
  storyState = "slide6";
  buttonContinue2.hide();


}
function button6event() {
  storyState = "slide7";
  button6.hide();

}
function button7event() {
  storyState = "slide8";
  button7.hide();

}
function button8event() {
  storyState = "slideSLUT1";
  button8.hide();

}
function button9event() {
  storyState = "slideSLUT2";
  button9.hide();

}
function keyPressed () {
  if (CPHsong.isPlaying()) {
    CPHsong.pause();
  } else {
    CPHsong.play();
  }
}
