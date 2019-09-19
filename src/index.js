import Scene from 'scene/scene.js';

class Game extends Phaser.Game {
  constructor() {
    super({
      parent: 'game-container',
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: [Scene],
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 },
          debug: false
        }
      }
    });
  }
}
new Game();
