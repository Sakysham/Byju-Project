var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var box1 = createSprite(25,75,50,50);
box1.shapeColor = "green";
var box2 = createSprite(75,75,50,50);
box2.shapeColor = "orange";
var box3 = createSprite(125,75,50,50);
box3.shapeColor = "green";
var box4 = createSprite(175,75,50,50);
box4.shapeColor = "orange";
var box5 = createSprite(225,75,50,50);
box5.shapeColor = "green";
var box6 = createSprite(275,75,50,50);
box6.shapeColor = "orange";
var box7 = createSprite(325,75,50,50);
box7.shapeColor = "green";
var box8 = createSprite(375,75,50,50);
box8.shapeColor = "orange";


//second row
var box9 = createSprite(25,125,50,50);
box9.shapeColor = "orange";
var box10 = createSprite(75,125,50,50);
box10.shapeColor = "green";
var box11 = createSprite(125,125,50,50);
box11.shapeColor = "orange";
var box12 = createSprite(175,125,50,50);
box12.shapeColor = "green";
var box13 = createSprite(225,125,50,50);
box13.shapeColor = "orange";
var box14 = createSprite(275,125,50,50);
box14.shapeColor = "green";
var box15 = createSprite(325,125,50,50);
box15.shapeColor = "orange";
var box16 = createSprite(375,125,50,50);
box16.shapeColor = "green";

//score

var score=0;
var chances=3;
//creating ball and paddle

var ball = createSprite(200,200,20,20);
ball.shapeColor = rgb((random(0,255),random(0,255),random(0,255)));
var paddle = createSprite(200,390,100,10);

var gameState="serve";
function draw() {
  //background(rgb(random(0,150),random(0,150),random(0,150)));
background("white");
//ball.shapeColor = rgb((random(0,255),random(0,255),random(0,255)));
  if(gameState==="serve"){
    drawSprites();
  textSize(25);
  text("Press Enter to serve", 125,275);
  if(keyDown("enter")){
    ball.velocityX = 4;
    ball.velocityY = 6;
    gameState = "play";
  }
  }
 stroke("black");
 textSize(20);
 text("Points: " +score,300,20);
 text("Chances: " +chances,50,20);
 
  if(ball.y>400){
    ball.x = 200;
    ball.y = 200;
    ball.velocityX= 0;
    ball.velocityY=0;
    if(score>0){
    score--;
    chances--;
    }
    gameState="serve";
  }
  if(chances===0){
    gameState="end";
  }
  if(gameState==="end"){
    textSize(15);
    stroke("red");
    text("You Lose",200,200);
    text("You score is:" +score, 150,300);
  }
  paddle.x = World.mouseX;
  
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(paddle);
  if(gameState==="play"){
   drawSprites(); 
  if(ball.isTouching(box1)){
    box1.destroy();
    score++;
  }
  
  if(ball.isTouching(box2)){
    box2.destroy();
    score++;
  }
  if(ball.isTouching(box3)){
    box3.destroy();
    score++;
  }
  if(ball.isTouching(box4)){
    box4.destroy();
    score++;
  }
  if(ball.isTouching(box5)){
    box5.destroy();
    score++;
  }
  if(ball.isTouching(box6)){
    box6.destroy();
    score++;
  }
  if(ball.isTouching(box7)){
    box7.destroy();
    score++;
  }
  if(ball.isTouching(box8)){
    box8.destroy();
    score++;
  }
  if(ball.isTouching(box9)){
    box9.destroy();
    score++;
  }
  if(ball.isTouching(box10)){
    box10.destroy();
    score++;
  }
   if(ball.isTouching(box11)){
    box11.destroy();
    score++;
  }
   if(ball.isTouching(box12)){
    box12.destroy();
    score++;
  }
   if(ball.isTouching(box13)){
    box13.destroy();
    score++;
  }
   if(ball.isTouching(box14)){
    box14.destroy();
    score++;
  }
   if(ball.isTouching(box15)){
    box15.destroy();
    score++;
  }
   if(ball.isTouching(box16)){
    box16.destroy();
    score++;
  }
  
  if(score===16&& gameState==="play"){
    background("white");
    textSize(50);
    text("You Won!!!",100,200);
    ball.destroy();
    paddle.destroy();
    gameState="win";
  }
  }
  if(gameState==="win"){
    background("white");
    textSize(50);
    text("You Won!!!",100,200);
    ball.destroy();
    paddle.destroy();
  }
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
