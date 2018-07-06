import { SceneButtonState, SCENE_BUTTON_STATES } from './scene-button-states';

export class StartMenuScene extends Phaser.Scene {
  private buttons: Array<any> = [];
  private sceneButtonStates: Array<SceneButtonState> = SCENE_BUTTON_STATES;
  constructor() {
    super({ key: 'StartMenuScene' });
    console.log('test in the start Menu constructor');
  }
  /**
   * Sets up the loads for the buttons available in the start menu
   */
  private initButtons() {
    this.sceneButtonStates.forEach((sceneButtonState: SceneButtonState) => {
      console.log('test with buttons', sceneButtonState);
      this.buttons.push();
    });
  }
  init() {}
  preload() {}
  create() {
    this.cameras.main.setBackgroundColor('#00bfff');

    this.initButtons();
  }
}
