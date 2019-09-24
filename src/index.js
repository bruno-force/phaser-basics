import Stage from 'scenes/stage.js';

class Game extends Phaser.Game {
  constructor() {
    super({
      parent: 'game-container',
      type: Phaser.AUTO,
      width: 960,
      height: 448,
      scene: [Stage],
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 },
          debug: true
        }
      }
    });
  }
}
new Game();
