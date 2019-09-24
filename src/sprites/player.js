export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);
    this.scene = config.scene;
    new config.animations(config.scene, config.key);
  }

  addToStage() {
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
    return this;
  }

  init() {
    this.setBounce(0);
    this.setCollideWorldBounds(true);
    this.scale = 0.2;
    return this;
  }

  update(activeInput, time, delta) {
    if (activeInput.left.isDown || activeInput.a.isDown) {
      this.setVelocityX(-160);
      this.flipX = true;
      //this.play('walk', true);
    } else if (activeInput.right.isDown || activeInput.d.isDown) {
      this.setVelocityX(160);
      this.flipX = false;
      //this.play('walk', true);
    } else {
      this.setVelocityX(0);
      this.play('stand', true);
    }

    if (
      (activeInput.up.isDown || activeInput.w.isDown) &&
      this.body.onFloor()
    ) {
      this.jump();
    }
  }

  jump() {
    // if (!this.isJumping) {
    this.isJumping = true;
    this.setVelocityY(-330);
    this.jumpTimer = 300;
    // } else {
    //   return false;
    // }
  }

  land() {
    if (this.isJumping) {
      this.isJumping = false;
    }
  }

  explode(player, bomb) {
    var diff = 0;
    if (player.x < bomb.x) {
      //  player is on the left-hand side of the bomb
      diff = bomb.x - player.x;
      player.setVelocityX(-10 * diff);
      bomb.setVelocityX(10 * diff);
    } else if (player.x > bomb.x) {
      //  player is on the right-hand side of the bomb
      diff = player.x - bomb.x;
      player.setVelocityX(10 * diff);
      bomb.setVelocityX(-10 * diff);
    } else {
      //  player is perfectly in the middle
      //  Add a little random X to stop it bouncing straight up!
      player.setVelocityX(2 + Math.random() * 8);
    }
  }
}
