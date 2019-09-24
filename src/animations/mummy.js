export default class MummyAnimations {
  constructor(scene, spriteKey) {
    this.setupAnimations(scene, spriteKey);
  }

  setupAnimations(scene, spriteKey) {
    scene.anims.create({
      key: 'left',
      frames: scene.anims.generateFrameNumbers(spriteKey, {
        start: 6,
        end: 23
      }),
      frameRate: 10,
      repeat: -1
    });

    scene.anims.create({
      key: 'stand',
      frames: scene.anims.generateFrameNumbers(spriteKey, {
        start: 0,
        end: 5
      }),
      frameRate: 5
    });
  }
}
