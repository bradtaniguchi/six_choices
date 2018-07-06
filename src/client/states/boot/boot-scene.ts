import { BOOT_ASSETS, BootAsset } from './boot-assets';

const UNKNOWN_ASSET_TYPE_ERROR = 'Unknown Asset Type Error';
export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }
  /**
   * Loads the given boot asset using `this.load`, so it is available later
   * using this.add.<TYPE> call from within anther scene
   * @param bootAsset the boot asset to load
   */
  private loadAsset(bootAsset: BootAsset) {
    switch (bootAsset.type) {
      case 'IMAGE':
        this.load.image(bootAsset.key, bootAsset.url);
        break;
      case 'AUDIO':
        this.load.audio(bootAsset.key, bootAsset.url);
        break;
      case 'SPRITE_SHEET':
        // TODO: I don't think this config for a sprite sheet is correct
        this.load.spritesheet(bootAsset.key, bootAsset.url);
        break;
      default:
        throw new Error(UNKNOWN_ASSET_TYPE_ERROR);
    }
  }
  preload() {
    // load all boot assets from the BOOT_ASSET file.
    // this can be displayed later with this.add.image(x,y, <KEY>)
    const bootAssets = BOOT_ASSETS;
    bootAssets.forEach((bootAsset: BootAsset) => this.loadAsset(bootAsset));
  }
  create() {
    console.log('boot create');
    this.scene.start('StartMenuScene');
  }
}
