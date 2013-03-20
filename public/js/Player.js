/**************************************************
** GAME PLAYER CLASS FOR LOCAL
**************************************************/
var arcRad =1;

var Player = function(startX, startY) {
	var x = startX,
		y = startY,
		id,
		moveAmount = 5;
	
	// Getters and setters
	var getX = function() {
		return x;
	};

	var getY = function() {
		return y;
	};

	var setX = function(newX) {
		x = newX;
	};

	var setY = function(newY) {
		y = newY;
	};

	// Update player position
	var update = function(keys) {
		// Previous position
		var prevX = x,
			prevY = y;

		// Up key takes priority over down
		if (keys.up) {
			y -= moveAmount;
		} else if (keys.down) {
			y += moveAmount;
		};

		// Left key takes priority over right
		if (keys.left) {
			x -= moveAmount;
		} else if (keys.right) {
			x += moveAmount;
		};
		
		if (x >= canvas.width-10) {
			x = canvas.width-10;
		};
		
		if (x <= 10) {
			x = 10;
		};
		
		if (y >= canvas.height*93/100) {
			y = canvas.height*93/100;
		}
		
		if (y <= 10) {
			y = 10;
		};
		
		return (prevX != x || prevY != y) ? true : false;
	};

	// Draw player
	var draw = function(ctx) {
		ctx.fillStyle = 'black';
		ctx.textAlign = 'center';
		/* ctx.fillText(name, x, y-10); */
		
		/// ROMNEY RAD
		if(x >= window.innerWidth/2 && y >= canvas.height*1/4 && y <= canvas.height*87/100) {
			ctx.fillStyle = '#de321e';
			ctx.beginPath();
			ctx.arc(x+2, y+2, arcRad, 0, 2 * Math.PI, true);
			ctx.lineWidth = 0.5;
			ctx.strokeStyle = "rgba(222,50,30,0.1)";
			ctx.stroke();
			ctx.closePath();
/*
			romneyScore++;
			obamaScore--;
*/

		}
		/// OBAMA RAD
		else if(x <= window.innerWidth/2 && y >= canvas.height*1/4 && y <= canvas.height*87/100) {
			ctx.fillStyle = '#3f7bed';
			ctx.beginPath();
			ctx.arc(x+2, y+2, arcRad, 0, 2 * Math.PI, true);
			ctx.lineWidth = 0.5;
			ctx.strokeStyle = "rgba(63,123,237,0.1)";
			ctx.stroke();
			ctx.closePath();
/*
			romneyScore--;
			obamaScore++;
*/

		} else {
			ctx.fillStyle = 'grey';
			ctx.beginPath();
			ctx.arc(x+2, y+2, arcRad, 0, 2 * Math.PI, true);
			ctx.lineWidth = 0.5;
			ctx.strokeStyle = "rgba(255,255,255,0.1)";
			ctx.stroke();
			ctx.closePath();
		};
		
		ctx.fillRect(x, y, 5, 5);
		arcRad *= 1.03;
		
		if(arcRad >= 20) {
			arcRad =1;
		}

		// score fix
		if (obamaScore <= 0) {
			obamaScore = 0;
		}
		
		if (romneyScore <= 0) {
			romneyScore = 0;
		}

		
	};

	// Define which variables and methods can be accessed
	return {
		getX: getX,
		getY: getY,
		setX: setX,
		setY: setY,
		update: update,
		draw: draw,
		id: id
	}
};