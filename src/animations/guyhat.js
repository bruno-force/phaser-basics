export default class GuyhatAnimations {
  constructor(scene, spriteKey) {
    this.setupAnimations(scene, spriteKey);
  }

  setupAnimations(scene, spriteKey) {
    console.log('SETTING UP ANUMATION', spriteKey);
    scene.anims.create({
      key: 'walk',
      frames: scene.anims.generateFrameNames(spriteKey, {
        prefix: 'walk_',
        start: 0,
        end: 15
      }),
      frameRate: 10
      // repeat: -1
    });

    scene.anims.create({
      key: 'stand',
      frames: scene.anims.generateFrameNumbers(spriteKey, {
        prefix: 'idle_',
        start: 0,
        end: 15
      }),
      frameRate: 10
      // repeat: -1
    });
    console.log('SETTING UP ANUMATION', 'ENDS');
  }
}
