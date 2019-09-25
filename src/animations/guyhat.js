export default class GuyhatAnimations {
  constructor(scene, spriteKey) {
    this.setupAnimations(scene, spriteKey);
  }

  setupAnimations(scene, spriteKey) {
    console.log('SETTING UP ANIMATION', spriteKey);

    console.log(
      scene.anims.generateFrameNames(spriteKey, {
        prefix: 'idle_',
        start: 0,
        end: 15
      })
    );

    scene.anims.create({
      key: 'walk',
      frames: scene.anims.generateFrameNames(spriteKey, {
        prefix: 'walk_',
        start: 1,
        end: 15
      }),
      // frames: [
      //   { key: spriteKey, frame: 'walk_1' },
      //   { key: spriteKey, frame: 'walk_2' },
      //   { key: spriteKey, frame: 'walk_3' },
      //   { key: spriteKey, frame: 'walk_4' },
      //   { key: spriteKey, frame: 'walk_5' },
      //   { key: spriteKey, frame: 'walk_6' },
      //   { key: spriteKey, frame: 'walk_7' },
      //   { key: spriteKey, frame: 'walk_8' },
      //   { key: spriteKey, frame: 'walk_9' },
      //   { key: spriteKey, frame: 'walk_10' },
      //   { key: spriteKey, frame: 'walk_11' },
      //   { key: spriteKey, frame: 'walk_12' },
      //   { key: spriteKey, frame: 'walk_13' },
      //   { key: spriteKey, frame: 'walk_14' },
      //   { key: spriteKey, frame: 'walk_15' }
      // ],
      frameRate: 15
      // repeat: -1
    });

    scene.anims.create({
      key: 'stand',
      // frames: scene.anims.generateFrameNumbers(spriteKey, {
      //   prefix: 'idle_',
      //   start: 0,
      //   end: 15
      // }),
      frames: [
        { key: spriteKey, frame: 'idle_1' },
        { key: spriteKey, frame: 'idle_2' },
        { key: spriteKey, frame: 'idle_3' },
        { key: spriteKey, frame: 'idle_4' },
        { key: spriteKey, frame: 'idle_5' },
        { key: spriteKey, frame: 'idle_6' },
        { key: spriteKey, frame: 'idle_7' },
        { key: spriteKey, frame: 'idle_8' },
        { key: spriteKey, frame: 'idle_9' },
        { key: spriteKey, frame: 'idle_10' },
        { key: spriteKey, frame: 'idle_11' },
        { key: spriteKey, frame: 'idle_12' },
        { key: spriteKey, frame: 'idle_13' },
        { key: spriteKey, frame: 'idle_14' },
        { key: spriteKey, frame: 'idle_15' }
      ],
      frameRate: 15
      // repeat: -1
    });
    console.log('SETTING UP ANIMATION', 'ENDS');
  }
}
