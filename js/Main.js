//structure from https://gamedevacademy.org/html5-phaser-tutorial-spacehipster-a-space-exploration-game/
var Aftermath = Aftermath || {};

Aftermath.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

var gas;
var food;
var player;
var enemyTrucks;
var goons;
var currSpeed = 0;
var gasCount = 0;
var foodCount = 0;
var gasText;
var foodText;

Aftermath.game.state.add('Boot', Aftermath.Boot);
Aftermath.game.state.add('Preload', Aftermath.Preload);
Aftermath.game.state.add('Menu', Aftermath.Menu);
Aftermath.game.state.add('Game', Aftermath.Game);

Aftermath.game.state.start('Boot');