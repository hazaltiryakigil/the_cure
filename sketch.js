/*  Game Lab -Nazlı Zeynep Kaptı - Yaprak Bilge Boru - Hazal Bilgiç
The Cure

to do :
The task will be solved by finding and collecting the objects in the rooms and placing them in their places.
 */


let img ;
let keyImage;
let manImage;
let paperImage;
let bookImage;
let ironImage;
let talk1Image;
let talk2Image;
let talk3Image;
let talk4Image;
let talk5Image;
let talk6Image;
let talk7Image;
let talk8Image;
let talk9Image;
let popup1Image;
let popup2Image;
let popup3Image;
let popup4Image;
let popup5Image;
let popup6Image;
let popup7Image;
let popup8Image;
let popup9Image;
let popup10Image;
let popup11Image, popup12Image, popup13Image,popup14Image,popup15Image,popup16Image,
popup17Image,popup18Image, popup19Image,popup20Image,popup21Image,popup22Image, popup23Image,popup24Image,popup25Image, popup26Image;
let drawiron = false;
let drawbook = false;
let drawPaper = false;
let drawKey=false, drawMan=false;
let drawtalk2 = false, drawtalk3= false,drawtalk4 = false, drawtalk5= false,drawtalk6 = false, drawtalk7= false,
drawtalk8 = false, drawtalk9= false,drawtalk10 = false, drawtalk11= false,drawtalk12 = false, drawtalk13= false, drawtalk14=false,drawtalk15=false;
let value = -4;
//forkey
var draggingForKey = false;
var offsetXForKey, offsetYForKey;
var xForKey=54, yForKey=75, wForKey = 75, hForKey = 150;

//for iron position
var draggingForIron = false;
var offsetXForIron, offsetYForIron;
var xForIron=250, yForIron=70, wForIron = 400, hForIron = 550;

//for paper position
var draggingForPaper = false;
var offsetXForPaper, offsetYForPaper;
var xForPaper=54, yForPaper=84, wForPaper = 170, hForPaper = 61;

//for man position
var draggingForMan = false;
var offsetXForMan, offsetYForMan;
var xForMan=54, yForMan=84, wForMan =94 , hForMan = 94;

var sprite;
var showPopup3 = false;
var playIntroVideo = true;
var drawImage = false;
function preload(){
  //img = loadImage('level1.png');
  img = null;
  keyImage = loadImage('key.png');
  manImage = loadImage('man.png');
  paperImage = loadImage('paper.png');
  bookImage = loadImage ('book.png');
  ironImage = loadImage ('iron.png');
  popup1Image = loadImage ('popup1.png');
  popup2Image = loadImage ('popup2.png');
  popup3Image = loadImage ('popup3.png');
  popup4Image = loadImage ('popup4.png');
  popup5Image = loadImage ('popup5.png');
  popup6Image = loadImage ('popup6.png');
  popup7Image = loadImage ('popup7.png');
  popup8Image = loadImage ('popup8.png');
  popup9Image = loadImage ('popup9.png');
  popup10Image = loadImage ('popup10.png');
  popup11Image = loadImage ('popup11.png');
  popup12Image = loadImage ('popup12.png');
  popup13Image = loadImage ('popup13.png');
  popup14Image = loadImage ('popup14.png');
  popup15Image = loadImage ('popup15.png');
  popup16Image = loadImage ('popup16.png');
  popup17Image = loadImage ('popup17.png');
  popup18Image = loadImage ('popup18.png');
  popup19Image = loadImage ('popup19.png');
  popup20Image = loadImage ('popup20.png');
  popup21Image = loadImage ('popup21.png');
  popup22Image = loadImage ('popup22.png');
  popup23Image = loadImage ('popup23.png');
  popup24Image = loadImage ('popup24.png');
  popup25Image = loadImage ('popup25.png');
  popup26Image = loadImage ('popup26.png');

}

function setup() {
  createCanvas(1920,1080);
  videoIntro = createVideo("intro.mp4");
  videoIntro.position(0,0);
  music = loadSound('music.mp3');
}

function draw() {
  background(220);
  if (drawImage) {
    image(img,0,0);
  }

  if (drawKey) {
    image(keyImage,54,84,54,87);
  }

  if (draggingForKey) {
    xForKey = mouseX + offsetXForKey;
    yForKey = mouseY + offsetYForKey;
    image(keyImage,xForKey,yForKey,wForKey,hForKey);
  }

  if (drawMan) {
    image(manImage,54,84,94,94);
  }

  if(drawPaper){
    image(paperImage,178,84,64,94)
  }
  if(drawbook){
    image(bookImage,278,94,114,88)
  }
  if(drawiron){
    image(ironImage,435,120,287,36);
  }

  if (draggingForIron) {
    xForIron = mouseX + offsetXForIron;
    yForIron = mouseY + offsetYForIron;
    image(ironImage,xForIron,yForIron,wForIron-100,hForIron-500);
  }

  if (draggingForPaper) {
    xForPaper = mouseX + offsetXForPaper;
    yForPaper = mouseY + offsetYForPaper;
    image(paperImage,xForPaper,yForPaper,wForPaper-75,hForPaper);
  }
  if (draggingForMan) {
    xForMan = mouseX + offsetXForMan;
    yForMan = mouseY + offsetYForMan;
    image(manImage,xForMan,yForMan,wForMan,hForMan);
  }

  if (value === 0 &&  (mouseY >= 519 && mouseY<= 1000) && (mouseX >= 1216 && mouseX <=1721)) {
    image(popup1Image,1340,350,274,32);
  }
  else if (value === 1 && (mouseY >= 656 && mouseY<= 850) && (mouseX >= 1241 && mouseX <=1817)){
    image(popup2Image,277,187,768,227);
  }

  else if (showPopup3 == true && value === 2 && (mouseY >= 656 && mouseY<= 850) && (mouseX >= 1241 && mouseX <=1817)){
    image(popup3Image,277,187,768,227);
  }
  else if (value == 2 && (mouseY >= 874 && mouseY<= 1005) && (mouseX >= 1432 && mouseX <=1558)) {
    image(popup4Image,277,187,768,227);
  }
  else if(value === 4 && (mouseY >= 453 && mouseY<= 999) && (mouseX >= 212 && mouseX <=456)){
    image(popup5Image,200,350,274,32);
  }
  else if(value === 5 && (mouseY >= 549 && mouseY<= 613) && (mouseX >= 822 && mouseX <=977)){
    image(popup6Image,277,187,768,227);
  }
  else if (value === 6 && (mouseY >= 506 && mouseY<= 996) && (mouseX >= 1366 && mouseX <=1694)){
    image(popup7Image,1400,350,274,32);
  }
  else if (value === 7 && (mouseY >= 466 && mouseY<= 525) && (mouseX >= 1377 && mouseX <=1419)){
    image(popup8Image,277,187,768,227);
  }
    else if (value === 11 && (mouseY >= 767 && mouseY<= 973) && (mouseX >= 796 && mouseX <=1020)){
      image(popup10Image,840,868,139,25);
    }
    else if (value === 8 && (mouseY >= 708 && mouseY<= 805) && (mouseX >= 1689 && mouseX <=1708)){
      image(popup11Image,277,187,768,227);
    }
    else if (value === 11 && (mouseY >= 767 && mouseY<= 973) && (mouseX >= 796 && mouseX <=1020)){
      image(popup12Image,277,187,768,227);
    }
    else if (drawtalk2){
      image(popup13Image,277,187,768,227);
    }
    else if (drawtalk3){
      image(popup14Image,277,187,768,227);
    }
    else if (drawtalk4){
      image(popup15Image,277,187,768,227);
    }
    else if (drawtalk5){
      image(popup16Image,277,187,768,227);
    }
    else if (drawtalk6){
      image(popup17Image,277,187,768,227);
    }
    else if (drawtalk7){
      image(popup18Image,277,187,768,227);
    }
    else if (drawtalk8){
      image(popup19Image,277,187,768,227);
    }
    else if (drawtalk9){
      image(popup20Image,277,187,768,227);
    }
    else if (drawtalk10){
      image(popup21Image,277,187,768,227);
    }
    else if (drawtalk11){
      image(popup22Image,277,187,768,227);
    }
    else if (drawtalk12){
      image(popup23Image,277,187,768,227);
    }
    else if (drawtalk13){
      image(popup24Image,277,187,768,227);
    }
    else if (drawtalk14){
      image(popup25Image,277,187,768,227);
    }
    else if (drawtalk15){
      image(popup26Image,526,427,768,227);
    }
}

function mouseClicked() {
  //level 1 screen
  if (value === -4 ) {
    videoIntro.play();
    value=-3;
  }
  //level 1 screen
  else if (value === -3 ) {
    videoIntro.pause();
    value=-2;
  }
  //level 1 screen
  else if (value === -2 ) {
    videoIntro.position(3000,3000);
    img = loadImage('level1.png');
    music.loop();
    drawImage = true;
    value= -1;
  }
  else if (value == -1) {
    img = loadImage('room.png');
    value= 0;
  }
  //first room
  else if (value === 0 &&  (mouseY >= 519 && mouseY<= 1000) && (mouseX >= 1216 && mouseX <=1721)) {
    img = loadImage('room2.png');
    showPopup3 = true;
    value=1;
  }
  //second room and play teh key
  else if (value === 1 && (mouseY >= 656 && mouseY<= 850) && (mouseX >= 1241 && mouseX <=1817)){
    drawKey=true;
    showPopup3 = false;
    value=2;
  }

  else if (value === 3 && (mouseY >= 501 && mouseY<= 1005) && (mouseX >= 137 && mouseX <=643)){
    img = loadImage('room.png');
    value=4;
  }
  else if (value === 4 && (mouseY >= 453 && mouseY<= 999) && (mouseX >= 212 && mouseX <=456)){
    img = loadImage('room3.png');
    value =5;
  }
  else if (value === 5 && (mouseY >= 549 && mouseY<= 613) && (mouseX >= 822 && mouseX <=977)){
    drawPaper = true;
    value =6;
  }
  else if (value === 6 && (mouseY >= 506 && mouseY<= 996) && (mouseX >= 1366 && mouseX <=1694)){
    img = loadImage('room4.png');
    value =7;
  }

  else if (value === 7 && (mouseY >= 466 && mouseY<= 525) && (mouseX >= 1377 && mouseX <=1419)){
      img = loadImage('room5.png');
   drawbook=true;
    value =8;
  }
//clickable section of the iron
  else if (value === 8 && (mouseY >= 708 && mouseY<= 805) && (mouseX >= 1689 && mouseX <=1708)){ //door position values
      img = loadImage('room6.png');
     drawiron=true;
      value =9;
    }
      //the part where iron is taken
  else if (value === 9 && (mouseY >= 439 && mouseY<= 981) && (mouseX >= 216 && mouseX <=451)){
    img = loadImage('room3.png');
    value=10;
  }
  else if (value === 11 && (mouseY >= 767 && mouseY<= 973) && (mouseX >= 796 && mouseX <=1020)){
    img = loadImage('room8.png');
    value=12;
  }
  else if (value === 13 && (mouseY >= 211 && mouseY<= 574) && (mouseX >= 1267 && mouseX <=1559)){
    drawtalk2 = true;
    value=14;
  }
  else if (value === 14 && (mouseY >= 211 && mouseY<= 574) && (mouseX >= 1267 && mouseX <=1559)){
    drawtalk2 = false;
    drawtalk3 = true;
    value=15;
  }
  else if (value === 15 && (mouseY >= 211 && mouseY<= 574) && (mouseX >= 1267 && mouseX <=1559)){
    drawtalk3 = false;
    drawtalk4 = true;
    value=16;
  }
  else if (value === 16 && (mouseY >= 211 && mouseY<= 574) && (mouseX >= 1267 && mouseX <=1559)){
    drawtalk4 = false;
    drawtalk5 = true;
    value=17;
  }
  else if (value === 17 && (mouseY >= 211 && mouseY<= 574) && (mouseX >= 1267 && mouseX <=1559)){
    drawtalk5 = false;
    drawtalk6 = true;
    value=18;
  }
  else if (value === 18 && (mouseY >= 192 && mouseY<= 403) && (mouseX >= 277 && mouseX <=1041)){
    drawtalk6 = false;
    drawtalk7 = true;
    value=19;
  }
  else if (value === 19 && (mouseY >= 211 && mouseY<= 574) && (mouseX >= 1267 && mouseX <=1559)){
    drawtalk7 = false;
    drawtalk8 = true;
    value=20;
  }
  else if (value === 20 && (mouseY >= 211 && mouseY<= 574) && (mouseX >= 1267 && mouseX <=1559)){
    drawtalk8 = false;
    drawtalk9 = true;
    value=21;
  }
  else if (value === 21&& (mouseY >= 211 && mouseY<= 574) && (mouseX >= 1267 && mouseX <=1559)){
    drawtalk9 = false;
    drawtalk10 = true;
    value=22;
  }
  else if (value === 22 && (mouseY >= 211 && mouseY<= 574) && (mouseX >= 1267 && mouseX <=1559)){
    drawtalk10 = false;
    drawtalk11 = true;
    value=23;
  }
  else if (value === 23 && (mouseY >= 211 && mouseY<= 574) && (mouseX >= 1267 && mouseX <=1559)){
    drawtalk11 = false;
    drawtalk12 = true;
    value=24;
  }
  else if (value === 24 && (mouseY >= 192 && mouseY<= 403) && (mouseX >= 277 && mouseX <=1041)){
    drawtalk12 = false;
    drawtalk13 = true;
    value=25;
  }
  else if (value === 25 && (mouseY >= 211 && mouseY<= 574) && (mouseX >= 1267 && mouseX <=1559)){
    drawtalk13 = false;
    drawtalk14 = true;
    value=26;
  }

    console.log("Value = " + value);
    console.log("mouseX = " + mouseX + "mouseY"+ mouseY);
}

function mousePressed() {
  if (mouseX > xForKey && mouseX < xForKey + wForKey && mouseY > yForKey && mouseY < yForKey + hForKey) {
    draggingForKey = true;
    offsetXForKey = xForKey-mouseX;
    offsetYForKey = yForKey-mouseY;
  }

  if (value == 10 && mouseX > xForIron && mouseX < xForIron + wForIron && mouseY > yForIron && mouseY < yForIron + hForIron) {
    draggingForIron = true;
    drawiron = false;
    offsetXForIron = xForIron-mouseX;
    offsetYForIron = yForIron-mouseY;
  }

  if (value == 12 && mouseX > xForPaper && mouseX < xForPaper + wForPaper && mouseY > yForPaper && mouseY < yForPaper + hForPaper) {
    draggingForPaper = true;
    drawPaper= false;
    img = loadImage('room9.png');
    offsetXForPaper = xForPaper-mouseX;
    offsetYForPaper = yForPaper-mouseY;
  }

  if (value == 26 && mouseX > xForMan && mouseX < xForMan + wForMan && mouseY > yForMan && mouseY < yForMan + hForMan) {
    draggingForMan = true;
    drawMan= false;
    offsetXForMan = xForMan-mouseX;
    offsetYForMan = yForMan-mouseY;
  }
}

function mouseReleased() {
  //for the next runs that will drop the mouse
  if (value == 2 && draggingForKey && (mouseY >= 874 && mouseY<= 1005) && (mouseX >= 1432 && mouseX <=1558)) {
    draggingForKey = false;
    drawKey = false;
    drawMan = true;
    value = 3;
  }

  if (value == 10 && draggingForIron && (mouseY >= 617 && mouseY<= 859) && (mouseX >= 1085 && mouseX <=1168)) {
    draggingForIron = false;
    drawiron = false;
    img = loadImage('room7.png');
    value = 11;
  }
  else if (value == 10){
    drawiron = true;
  }

  if (value == 12 && draggingForPaper && (mouseY >= 696 && mouseY<= 804) && (mouseX >= 572 && mouseX <=713)) {
    draggingForPaper = false;
    drawPaper = false;
    img = loadImage('ghost.png');
    value = 13;
  }

  if (value == 26 && draggingForMan && (mouseY >= 211 && mouseY<= 574) && (mouseX >= 1267 && mouseX <=1559)) {
    draggingForMan = false;
    drawtalk14 = false;
    drawtalk15 = true;
    drawMan = false;
    value = 27;
  }
}
