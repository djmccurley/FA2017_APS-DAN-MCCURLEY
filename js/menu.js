Aftermath.Menu = function(){};

Aftermath.Menu.prototype = {
	create: function() {
		this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'sand');
		this.background.autoScroll(-10, 0);

		var text = "Press Spacebar to begin";
		var style = {font: "2rem Helvetica, Arial, Sans-Serif", fill: "#fff", align: "center"};
		var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
		t.anchor.set(0.5);
	}, 
}