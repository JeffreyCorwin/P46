class Game {
  constructor() {}

  start() {
    player = new Player();

    playerCount = player.getCount();

    form = new Form();
    form.display();

    zombie1 = createSprite(534, 700);
    zombie1.addImage(zombie1Img);
    zombie1.scale = 0.155;

    zombie2 = createSprite(900, 700);
    zombie2.addImage(zombie2Img);
    zombie2.scale = 0.09;

    zombies = [zombie1, zombie2];
  }
  
  getState(){
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data){
        gameState = data.val();
    });
  }

  updateState(state){
    database.ref("/").update({
      gameState:state
    });
  }

  handleElements(){
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play(){
    this.handleElements();
    Player.getPlayersInfo();
    if(allPlayers !== undefined){
      image(lawn, 0, -height*2, width, height*6);
      drawSprites();
    }
  }

}
