var Aftermath = Aftermath || {};

Aftermath.Game = function(){};

Aftermath.Game.prototype = {
	create: function() {
		this.game.world.setBounds(0,0, 24000, 24000);
		this.background = this.game.add.tileSprite(0, 0, 24000, 24000, 'sand');

		this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
		this.player.anchor.setTo(0.5, 0.5);

		this.game.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds = true;
		this.player.body.drag.set(300);
		this.game.camera.follow(this.player); 

		gas = this.game.add.group();
		gas.enableBody = true;
		gas.scale.setTo(2);

		food = this.game.add.group();
		food.enableBody = true;
		food.scale.setTo(2);

		enemyTrucks = this.game.add.group();
		enemyTrucks.enableBody = true;

		goons = this.game.add.group();
		goons.enableBody = true;


		for (var i=0; i <= 100; i++) {
			var gasBarrel = gas.create(this.game.world.randomX, this.game.world.randomY, 'gas');
			var foodBarrel = food.create(this.game.world.randomX, this.game.world.randomY, 'food');
			gasBarrel.body.collideWorldBounds = true;
			foodBarrel.body.collideWorldBounds = true;
		}

	for (var i=0; i<=35; i++) {
		var enemyTruck = enemyTrucks.create(this.game.world.randomX, this.game.world.randomY, 'enemy');
		/*enemyBase.body.immovable = true;*/
			enemyTruck.body.collideWorldBounds = true;
			enemyTruck.body.drag.set(1000);
			enemyTruck.body.bounce.x=.5;
			enemyTruck.body.bounce.y=.5;
			for (j=1; j<=4; j++) {
				var goon = goons.create(enemyTruck.x + this.game.rnd.integerInRange(-200, 200), enemyTruck.y + this.game.rnd.integerInRange(-200, 200), 'hitman');
				goon.body.collideWorldBounds = true;
				goon.body.drag.set(300);
				enemyTruck.body.bounce.x=.8;
				enemyTruck.body.bounce.y=.8;
			}
	}

	gasText = this.game.add.text(16, 16, 'Gas: 0', {
		fontSize: '32px', fill: '#000'});

	foodText = this.game.add.text(16, 48, 'Food: 0', {
		fontSize: '32px', fill: '#000'});

	gasText.fixedToCamera = true;
	foodText.fixedToCamera = true;
},

	update: function() {

		this.player.body.angularVelocity = 0;

  if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
  	if (this.player.body.speed > 0) {
  		this.player.body.angularVelocity = 140; 	
  	} 

  } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
  		if (this.player.body.speed > 0) {
  			this.player.body.angularVelocity = -140;
	  }

	  }

	if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
			if (currSpeed < 0) {
				currSpeed += 20;
			} else if (currSpeed >= 0 && currSpeed < 600) {
				currSpeed += 25;
			}
			this.game.physics.arcade.velocityFromAngle(this.player.angle, currSpeed, this.player.body.velocity);
		} else {
				if ( currSpeed > 0) {
					currSpeed -= 6;
				} else if (currSpeed < 0) {
					currSpeed += 5;
				}
			this.game.physics.arcade.velocityFromAngle(this.player.angle, currSpeed, this.player.body.velocity);
		}
//Drifting function
	/*if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP) && this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
						this.game.physics.arcade.velocityFromAngle(this.player.angle+25, currSpeed, this.player.body.velocity);}*/

	if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
		if (currSpeed > 0) {
			currSpeed -= 15;
		} else if (currSpeed <= 0 && currSpeed > (-400)) {
				currSpeed -= 20;
			}
				this.game.physics.arcade.velocityFromAngle(this.player.angle, currSpeed, this.player.body.velocity);
			}

	this.game.physics.arcade.overlap(this.player, gas, collectGas, null, this);

	function	collectGas (player, gas) {
		gas.kill();
		gasCount += 1;
		gasText.text = 'Gas: ' + gasCount;
	}		

	this.game.physics.arcade.overlap(this.player, food, collectFood, null, this);

	function	collectFood (player, food) {
		food.kill();
		foodCount += 1;
		foodText.text = 'Food: ' + foodCount;
	}	

	this.game.physics.arcade.collide(this.player, enemyTrucks, hitEnemyTruck);

	function hitEnemyTruck() {
			currSpeed *= .05;
	}

	this.game.physics.arcade.collide(this.player, goons, hitGoons);

	function hitGoons(player, goon) {
			if (currSpeed >= 550) {
				currSpeed *= .9;
				goon.kill();
			} else {

			}
			
	}
	}
}