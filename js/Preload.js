var Aftermath = Aftermath || {};

Aftermath.Preload = function(){};

Aftermath.Preload.prototype = {
	preload: function() {
		this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');

		this.splash.anchor.setTo(0.5);

		this.load.image('city', 'assets/city.png');
		this.load.image('enemy', 'assets/enemy.png');
		this.load.image('food', 'assets/food.png');
		this.load.image('gas', 'assets/gas.png');
		this.load.image('hitman', 'assets/hitman.png');
		this.load.image('man', 'assets/man.png');
		this.load.image('player', 'assets/player1.png');
		this.load.image('sand', 'assets/sand.png');
		this.load.image('bullet', 'assets/bullet.png');
	},

	create: function() {
		this.state.start('Menu');
	}
};