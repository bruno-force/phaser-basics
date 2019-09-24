export default class PlayerAnimations {
  constructor(scene, spriteKey) {
    this.setupAnimations(scene, spriteKey);
  }

  setupAnimations(scene, spriteKey) {
    scene.anims.create({
      key: 'left',
      frames: scene.anims.generateFrameNumbers(spriteKey, { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    scene.anims.create({
      key: 'turn',
      frames: [{ key: spriteKey, frame: 4 }],
      frameRate: 20
    });

    scene.anims.create({
      key: 'right',
      frames: scene.anims.generateFrameNumbers(spriteKey, { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });
  }
}
