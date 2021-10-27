var canvas;
var backgroundImage;
var form, player, game;
var database;
var playerCount;
var gameState;
var allPlayers;
var zombie1, zombie2, zombies = [];
var zombie1Img, zombie2Img;
var lawn;

function preload() {
  backgroundImage = loadImage("./assets/HauntedHouse.gif");
  lawn = loadImage("assets/grass.png");
  zombie1Img = loadImage("assets/Zombie1.png");
  zombie2Img = loadImage("assets/Zombie2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);

  if(playerCount === 2){
    game.updateState(1);
  }

  if(gameState === 1){
    game.play();
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
