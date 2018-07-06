import config from './config';
import { Game } from 'phaser';
import { BootScene } from './states/boot/boot-scene';

export class MyGame extends Game {
  private sceneManager: Phaser.Scenes.SceneManager;
  constructor() {
    const docElement = document.documentElement;
    const width =
      docElement.clientWidth > config.gameWidth
        ? config.gameWidth
        : docElement.clientWidth;
    const height =
      docElement.clientHeight > config.gameHeight
        ? config.gameHeight
        : docElement.clientHeight;
    super({
      width,
      height,
      // context: Phaser.CANVAS,
      parent: 'game',
    });

    this.sceneManager = this.scene;
    const bootScene = new BootScene();
    this.sceneManager.add('Boot', bootScene, true);
  }
}
