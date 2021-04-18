/* window.onload = function() { */
const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

// load images

const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";

// create the snake

let snake = [];

snake[0] = {
    x : 9 * box,
    y : 10 * box
};

// create the food

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

// create the score var

let score = 0;

//control the snake

let d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
        left.play();
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        d = "UP";
        up.play();
    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
        right.play();
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
        down.play();
    }
}

// cheack collision function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

// draw everything to the canvas

function draw(){
    
    ctx.drawImage(ground,0,0);
    
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "green" : "white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    
    ctx.drawImage(foodImg, food.x, food.y);
    
    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    // which direction
    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;
    
    // if the snake eats the food
    if(snakeX == food.x && snakeY == food.y){
        score++;
        eat.play();
        food = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        }
        // we don't remove the tail
    }else{
        // remove the tail
        snake.pop();
    }
    
    // add new Head
    
    let newHead = {
        x : snakeX,
        y : snakeY
    }
    
    // game over
    
    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
        clearInterval(game);
        dead.play();
    }
    
    snake.unshift(newHead);
    
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score,2*box,1.6*box);
}

// call draw function every 100 ms

let game = setInterval(draw,100);
	
	// Settings
	padding = 4;
	tileCount = 20;
	tileSize = 600 / tileCount;
	
	// Initial values
	fpsInit = 5;
	xVelInit = 1;
	yVelInit = 0;
	xPosInit = 8;
	yPosInit = 3;
	lengthInit = 5;
	scoreInit = 0;
	
	//values
	fps = 5;
	score = 0;
	highscore = 0;
	shouldSpeedUp = false;
	paused = false;
	
	// set up game
	setInitialValues();
	
	// Boilerplate
	canvas = document.getElementById("c");
	ctx = canvas.getContext("2d");
	ctx.shadowBlur = 10;
	scoreElement = document.getElementById("scoreElement");
	highscoreElement = document.getElementById("highscoreElement");
	pauseOverlay = document.getElementById("pauseOverlay");
	pauseBox = document.getElementById("pauseBox");
	document.addEventListener("keydown", keyPress);
	
	// start game
	gameLoop = setInterval(update, 1000/fps);
	
	function restartGameLoop() {
		if (gameLoop) {
			clearInterval(gameLoop);
		}
		gameLoop = setInterval(update, 1000/fps);
	}

	
	function update() {
		if (paused) {
			clearInterval(gameLoop);
			return;
		}
		// check if moving in reverse of direction, which is not possible
		if ((xPos + xVel == trail[1].x && xVel != 0) || (yPos + yVel == trail[1].y && yVel != 0)) {
			xVel *= -1;
			yVel *= -1;
		}
	
		// Move snake
		xPos += xVel;
		yPos += yVel;
		
		// Check for out of bounds
		if (xPos < 0 || yPos < 0 || xPos >= tileCount ||yPos >= tileCount) {
			resetGame();
			return;
		}
		
		// check for apple collection
		if (xPos == xApple && yPos == yApple) {
			score++;
			length++;
			shouldSpeedUp = fps < 15;
			xApple = Math.floor(Math.random() * tileCount);
			yApple = Math.floor(Math.random() * tileCount);
			while (appleInTrail()) {
				xApple = Math.floor(Math.random() * tileCount);
				yApple = Math.floor(Math.random() * tileCount);
			}
		}
		
		// update snake trail
		trail.splice(0,0,{x: xPos, y: yPos});
		while (trail.length > length) {
			trail.pop();
		}
		
		// check for collision with self
		for (var i = 1; i < trail.length; i++) {
			let pos = trail[i];
			if (pos.x == xPos && pos.y == yPos) {
				resetGame();
			}
		}
	
		// Clear the canvas with black
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		// Draw the apple
		ctx.fillStyle = "#FF0000";
		ctx.shadowColor = "#FF0000";
		ctx.fillRect(
			xApple * tileSize + padding,
			yApple * tileSize + padding,
			tileSize - padding,
			tileSize - padding
		);
		
		// Draw the snake
		ctx.fillStyle = "#00FF00";
		ctx.shadowColor = "#00FF00";
		for (var i = 0; i < trail.length; i++) {
			ctx.fillStyle = colorLuminance("#00FF00", -0.05 * ((i < 10) ? i : 10));
			ctx.shadowColor = colorLuminance("#00FF00", -0.05 * ((i < 10) ? i : 10));
			let pos = trail[i];
			ctx.fillRect(
				pos.x * tileSize + padding,
				pos.y * tileSize + padding,
				tileSize - padding,
				tileSize - padding
			);
		}
		
		// update score label
		scoreElement.innerHTML = score;
		
		// finally speed up game loop if applicable
		if (shouldSpeedUp) {
			shouldSpeedUp = false;
			fps++;
			restartGameLoop();
		}
	}
	
	function appleInTrail() {
		for (var i = 0; i < trail.length; i++) {
			if (xApple == trail[i].x && yApple == trail[i].y) {
				return true;
			}
		}
		return false;
	}
	
	function resetGame() {
		if (highscore < score) {
			highscore = score;
			highscoreElement.innerHTML = highscore;
		}
		setInitialValues();
		restartGameLoop();
	}
	
	function setInitialValues() {
		xPos = xPosInit;
		yPos = yPosInit;
		xVel = xVelInit;
		yVel = yVelInit;
		fps = fpsInit;
		xApple = yApple = 10;
		length = 5;
		score = 0;
		
		trail = [];
		for (var i = 0; i < length; i++) {
			trail.push({x: xPos - i, y: yPos});
		}
	}
	
	function keyPress(e) {
		switch(e.keyCode) {
			case 37:
				if (xVel == 1 || paused) return;
				xVel = -1;
				yVel = 0;
				break;
			case 38:
				if (yVel == 1 || paused) return;
				xVel = 0;
				yVel = -1;
				break;
			case 39:
				if (xVel == -1 || paused) return;
				xVel = 1;
				yVel = 0;
				break;
			case 40:
				if (yVel == -1 || paused) return;
				xVel = 0;
				yVel = 1;
				break;
			case 27:
			case 80:
				togglePause();
				break;
		}
	}
	
	function togglePause() {
		paused = !paused;
		if (!paused) {
			restartGameLoop();
			pauseBox.style.display = "none";
			pauseOverlay.style.display = "none";
		} else {
			pauseBox.style.display = "block";
			pauseOverlay.style.display = "block";
		}
	}
	
	function colorLuminance(hex, lum) {
		// validate hex string
		hex = String(hex).replace(/[^0-9a-f]/gi, '');
		if (hex.length < 6) {
			hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
		}
		lum = lum || 0;
		// convert to decimal and change luminosity
		var rgb = "#", c, i;
		for (i = 0; i < 3; i++) {
			c = parseInt(hex.substr(i*2,2), 16);
			c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
			rgb += ("00"+c).substr(c.length);
		}
		return rgb;
	}
	
}