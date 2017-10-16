//structure from https://gamedevacademy.org/html5-phaser-tutorial-spacehipster-a-space-exploration-game/
var Aftermath = Aftermath || {};

Aftermath.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

Aftermath.game.state.add('Boot', Aftermath.Boot);
Aftermath.game.state.add('Preload', Aftermath.Preload);
Aftermath.game.state.add('Menu', Aftermath.Menu);
Aftermath.game.state.add('Game', Aftermath.Game);

Aftermath.game.state.start('Boot');