var spiderMan, spiderManAnimation, invisibleGround, carnageAnimation, venomAnimation, lizardAnimation, electroAnimation, rockImage, cloudImage, spiderManJumpingAnimation;
var gameState = "story";
var playButton, controlButton, playButtonImage, controlButtonImage;
var electroGroup, lizardGroup, carnageGroup, venomGroup, platformGroup;
var rockGroup, cloudGroup;
var gameOver, gameOverImage, reset, resetImage;
var score = 0;
var coinGroup, coinImage;
var rand;
var groundImage;
var backGround, backGroundImage;
var ground;

function preload() {
  groundImage = loadImage("ground-1.png");
  backGroundImage = loadImage("the background.png");
  coinImage = loadImage("coin sprite.png");
  gameOverImage = loadImage("game over.png");
  resetImage = loadImage("restart.png");
  spiderManJumpingAnimation = loadAnimation("spider man jumping_6.png", "spider man jumping_7.png")
  controlButtonImage =  loadImage("controls button.png");
  playButtonImage = loadImage("play button.png");
  cloudImage = loadImage("cloud.png");
  rockImage = loadImage("rock.png");

  spiderManAnimation = loadAnimation("spider man running_1.png", "spider man running_2.png", "spider man running_3.png", "spider man running_4.png", "spider man running_5.png", "spider man running_6.png", "spider man running_7.png", "spider man running_8.png", "spider man running_9.png", "spider man running_10.png", "spider man running_11.png");               
  
  
  carnageAnimation = loadAnimation("carnage walk_1.png", "carnage walk_2.png", "carnage walk_3.png", "carnage walk_4.png", "carnage walk_5.png", "carnage spin_1.png", "carnage spin_2.png", "carnage spin_3.png", "carnage spin_4.png","carnage spin_1.png", "carnage spin_2.png", "carnage spin_3.png", "carnage spin_4.png", "carnage spin_1.png", "carnage spin_2.png", "carnage spin_3.png", "carnage spin_4.png",  "carnage walk_1.png", "carnage walk_2.png", "carnage walk_3.png", "carnage walk_4.png", "carnage walk_5.png", "carnage walk_1.png", "carnage walk_2.png", "carnage walk_3.png", "carnage walk_4.png", "carnage walk_5.png", "carnage walk_1.png", "carnage walk_2.png", "carnage walk_3.png", "carnage walk_4.png", "carnage walk_5.png", "carnage slash_1.png", "carnage slash_2.png", "carnage slash_3.png", "carnage slash_1.png", "carnage slash_2.png", "carnage slash_3.png", "carnage slash_1.png", "carnage slash_2.png", "carnage slash_3.png");
  
  venomAnimation = loadAnimation("venom running 1.png", "venom running 2.png", "venom running 3.png", "venom running 4.png", "venom running 5.png", "venom running 6.png", "venom running 7.png", "venom running 8.png", "venom running 9.png", "venom running 10.png", "venom running 1.png", "venom running 2.png", "venom running 3.png", "venom running 4.png", "venom running 5.png", "venom running 6.png", "venom running 7.png", "venom running 8.png", "venom running 9.png", "venom running 10.png", "venom claw 1.png", "venom claw 2.png", "venom claw 3.png", "venom claw 4.png", "venom claw 5.png", "venom claw 6.png", "venom claw 7.png", "venom claw 8.png", "venom claw 9.png", "venom claw 10.png", "venom claw 1.png", "venom claw 2.png", "venom claw 3.png", "venom claw 4.png", "venom claw 5.png", "venom claw 6.png", "venom claw 7.png", "venom claw 8.png", "venom claw 9.png", "venom claw 10.png");
  
  lizardAnimation = loadAnimation("lizard running 1.png", "lizard running 2.png", "lizard running 3.png", "lizard running 4.png", "lizard running 5.png", "lizard running 6.png", "lizard running 7.png", "lizard running 8.png", "lizard running 1.png", "lizard running 2.png", "lizard running 3.png", "lizard running 4.png", "lizard running 5.png", "lizard running 6.png", "lizard running 7.png", "lizard running 8.png", "lizard running 1.png", "lizard running 2.png", "lizard running 3.png", "lizard running 4.png", "lizard running 5.png", "lizard running 6.png", "lizard running 7.png", "lizard running 8.png", "lizard kick 1.png", "lizard kick 2.png", "lizard kick 3.png", "lizard kick 4.png", "lizard kick 4.png", "lizard kick 4.png");
  
  electroAnimation = loadAnimation("electro walking_1.png", "electro walking_2.png", "electro walking_3.png", "electro walking_4.png", "electro walking_5.png", "electro walking_6.png", "electro walking_7.png", "electro walking_8.png", "electro walking_9.png", "electro walking_10.png");
}
function setup() {
  createCanvas(1000, 600);
  
  backGround = createSprite(0, 0, 1, 1);
  backGround.addImage(backGroundImage);
  backGround.scale = 1.2;
  
  ground = createSprite(700, 575, 1500, 70);
  ground.addImage(groundImage);
  ground.scale = 0.4;
  ground.visible = false;
  
  playButton = createSprite(500, 400, 20, 20);
  playButton.addImage(playButtonImage);
  playButton.scale = 0.3;
  
  controlButton = createSprite(500, 500, 20, 20);
  controlButton.addImage(controlButtonImage);
  controlButton.scale = 0.3;
  
  spiderMan = createSprite(200, 540, 10, 10);
  spiderMan.addAnimation("hero", spiderManAnimation);
  spiderMan.scale = 2;
  spiderMan.setCollider("rectangle", 0, 0, 57.5, 56.5);
  spiderMan.visible = false;
  
  invisibleGround = createSprite(300, 550, 1500, 10);
  invisibleGround.visible = false;
  
  electroGroup = new Group();
  venomGroup = new Group();
  carnageGroup = new Group();
  lizardGroup = new Group();
  
  rockGroup = new Group();
  cloudGroup = new Group();
  coinGroup = new Group();
  
  gameOver = createSprite(500, 200, 20, 20);
  gameOver.addImage(gameOverImage);
  gameOver.visible = false;
  
  reset = createSprite(500, 400, 20, 20);
  reset.addImage(resetImage);
  reset.visible = false;
  reset.scale = 0.3
}

function draw() {
  background ("white");
  
  spiderMan.collide(invisibleGround)
  
  if (gameState === "story") {
    story();
    
    if (mousePressedOver(playButton)) {
      gameState = "play";
    }
    if (mousePressedOver(controlButton)){
      gameState = "control"
    }
  }
  
  if (gameState === "control") {
    control();
    
    ground.visible = false;
  }
  
  if (gameState === "play") {
    backGround.visible = true;
    backGround.velocityX = -6;
    playButton.visible = false;
    controlButton.visible = false;
    spiderMan.visible = true;
    
    ground.visible = true;
    reset.visible = false;
    gameOver.visible = false;
    
    spawn();
    spawnObstacles();
    
    if (backGround.x < 0) {
      backGround.x = backGround.width / 2;
    }
    
    if (keyDown("space") && spiderMan.y > 484) {
      spiderMan.velocityY = -15;
    }
    
    if (spiderMan.isTouching(venomGroup) || spiderMan.isTouching(lizardGroup) || spiderMan.isTouching(carnageGroup) || spiderMan.isTouching(electroGroup) || spiderMan.isTouching(rockGroup)) {
      gameState = "end";
      
      spiderMan.velocityY = 0;
    }
    
    if (spiderMan.isTouching(coinGroup)) {
      coinGroup.destroyEach();
      score += 1;
    }
  }
  
  if (gameState === "end") {
    backGround.velocityX = 0;
    
    spiderMan.velocityX = 0;
    spiderMan.velocityY = 0;
    
    ground.visible = true;

    cloudGroup.setVelocityXEach(0);
    venomGroup.setVelocityXEach(0);
    lizardGroup.setVelocityXEach(0);
    carnageGroup.setVelocityXEach(0);
    electroGroup.setVelocityXEach(0);
    rockGroup.setVelocityXEach(0);
    coinGroup.setVelocityXEach(0);
    
    cloudGroup.setVelocityYEach(0);
    venomGroup.setVelocityYEach(0);
    lizardGroup.setVelocityYEach(0);
    carnageGroup.setVelocityYEach(0);
    electroGroup.setVelocityYEach(0);
    rockGroup.setVelocityYEach(0);
    coinGroup.setVelocityYEach(0);
    
    cloudGroup.setLifetimeEach(-1);
    venomGroup.setLifetimeEach(-1);
    carnageGroup.setLifetimeEach(-1);
    lizardGroup.setLifetimeEach(-1);
    rockGroup.setLifetimeEach(-1);
    electroGroup.setLifetimeEach(-1);
    coinGroup.setLifetimeEach(-1);
    
    reset.visible = true;
    gameOver.visible = true;
    
    if (mousePressedOver(reset)) {
      rockGroup.destroyEach();
      venomGroup.destroyEach();
      cloudGroup.destroyEach();
      lizardGroup.destroyEach();
      carnageGroup.destroyEach();
      electroGroup.destroyEach();
      cloudGroup.destroyEach();
      coinGroup.destroyEach();
      gameState = "play";
      score = 0;
    }
  }
  
  spiderMan.velocityY = spiderMan.velocityY + 0.5;  
  
  drawSprites();
  textSize(15)
  stroke("yellow");
  fill("black");
  text("SCORE: " + score, 10, 580);
}

function story() {
  playButton.visible = true;
  controlButton.visible = true;
  backGround.visible = false;
}

function control() {
  playButton.visible = false;
  controlButton.visible = false;
  fill("black")
  
  stroke("black")
  textSize(30);
  text("CONTROLS", 450, 100);
  text("PRESS SPACE TO JUMP", 390, 200);
  text("PRESS 'b' TO GO BACK", 10, 40);
  
  if (keyDown("b")) {
    gameState = "story";
  }
}

function spawnObstacles() {
  if (frameCount % 130 === 0) {
    rock = createSprite(1100, invisibleGround.y - 30, 20, 20);
    rock.velocityX = -7;
    rock.addImage(rockImage);
    rock.lifetime = 300;
    rockGroup.add(rock);
  }
  
  if (frameCount % 160 === 0) {
    cloud = createSprite(1100, Math.round(random(20, 250)), 20, 20);
    cloud.velocityX = -6;
    cloud.addImage(cloudImage);
    cloud.lifetime = 300;
    spiderMan.depth = cloud.depth;
    spiderMan.depth = cloud.depth + 1;
    cloudGroup.add(cloud);
  }
  
  if (frameCount % 270 === 0) {
    coin = createSprite(1100, Math.round(random(300, spiderMan.y)), 20, 20);
    coin.addImage(coinImage);
    coin.velocityX = -6;
    coin.scale = 0.2;
    coinGroup.add(coin);
  }  
}

function spawn() {
  if (frameCount % 400 === 0) {
    rand = Math.round(random(1, 5));
    if (rand === 1) {
      carnage = createSprite(1100, 0, 20, 20);
        carnage.addAnimation("boss1", carnageAnimation);
        carnage.lifetime = 300;
        carnage.velocityX  = -14;
        carnage.velocityY = Math.round(random(5, 8));
        carnage.setCollider("rectangle", 0, 0, carnage.width - 10, carnage.height - 10);
        carnageGroup.add(carnage);
    }
    
    if (rand === 2) {
      electro = createSprite(1100, 0, 20, 20);
        electro.addAnimation("boss2", electroAnimation);
        electro.lifetime = 200;
        electro.velocityX = -14;
        electro.velocityY = Math.round(random(5, 8));
        electro.scale = 1.5;

        electroGroup.add(electro);
    }   

    
    if (rand === 3) {
      lizard = createSprite(1100, 0, 20, 20);
      lizard.addAnimation("boss3", lizardAnimation);
      lizard.velocityX = -14;
      lizard.velocityY = Math.round(random(5, 9));
 
      lizardGroup.add(lizard);
    }
    if (rand === 5) {
      venom = createSprite(1100, 0, 20, 20);
      venom.addAnimation("boss4", venomAnimation);
      venom.lifetime = 300;
      venom.velocityX = -14;
      venom.velocityY = Math.round(random(5, 8)); 
      venom.scale = 1.7;
      venom.setCollider("rectangle", 0, 0, venom.width - 50, venom.height - 50)
      venomGroup.add(venom);
    }
  }
}