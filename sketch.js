var ball;
var database
var gamestate =0;
var playerCount;
var allPlayers;
var distance = 0;
var form,player,game;
var car1, car2, car3, car4, cars 
function setup(){
    database = firebase.database()
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  game = new Game()
  game.getState()
  game.start()
}

function draw(){
    background("white");
    if(playerCount === 2){
      game.update(1);
    }
    if(gamestate === 1){
      clear();
      game.play();
    }
}