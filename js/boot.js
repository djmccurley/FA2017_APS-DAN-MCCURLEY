var Aftermath = Aftermath || {};

Aftermath.Boot = function(){};

Aftermath.Boot.prototype = {
	preload: function() {
		this.load.image('logo', 'assets/load.gif');
	},

	create: function(){
		this.game.stage.backgroundColor = '#f7f7f7';
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = 240;
		this.scale.minHeight = 170;
		this.scale.maxWidth = 2880;
		this.scale.maxHeight = 1920;


		this.scale.pageAlignHorizontally = true;

/*		this.scale.setScreenSize(true);*/

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		this.state.start('Preload');
	}
};