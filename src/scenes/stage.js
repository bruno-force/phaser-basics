import Player from '../sprites/player';
import GuyhatAnimations from '../animations/guyhat';

class Stage extends Phaser.Scene {
  constructor() {
    super({
      key: 'game'
    });
    this.score = 0;
  }

  preload() {
    this.load.image('background', 'assets/BG.png');
    this.load.atlas('guyhat', 'assets/guyhat.png', 'assets/guyhat_atlas.json');

    this.load.image('tiles', 'assets/tilesheets/platform-pack.png');
    this.load.tilemapTiledJSON('map', 'assets/stages/level1.json');
  }

  create() {
    const background = this.add
        .image(0, 0, 'background')
        .setDisplayOrigin(0, 0)
        .setDisplaySize(
          this.sys.game.canvas.width,
          this.sys.game.canvas.height
        ),
      map = this.make.tilemap({ key: 'map' }),
      tileset = map.addTilesetImage('First', 'tiles'),
      platforms = map.createStaticLayer('Platforms', tileset, 0, 0);

    console.log(map);
    console.log(tileset);
    console.log(platforms);

    platforms.setCollisionByExclusion(-1, true);

    this.player = new Player({
      scene: this,
      key: 'guyhat',
      x: 50,
      y: 300,
      animations: GuyhatAnimations
    })
      .addToStage()
      .init();

    this.physics.add.collider(this.player, platforms, function(a, b) {
      // console.log(a, b);
    });
  }

  update(time, delta) {
    this.player.update(this.activeInput, time, delta);
  }

  get activeInput() {
    return {
      ...this.input.keyboard.createCursorKeys(),
      w: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      s: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      a: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      d: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    };
  }
}

export default Stage;
