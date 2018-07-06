export type BootAssetType = 'AUDIO' | 'IMAGE' | 'SPRITE_SHEET';

export interface BootAsset {
  type: BootAssetType;
  key: string; // the key to load the image later
  url: string; // the url for the asset
}
export const BOOT_ASSETS: Array<BootAsset> = [
  {
    type: 'IMAGE',
    key: 'mermaid',
    url: 'assets/images/mermaid.png',
  },

  // TODO: add more boot/load assets that are to be loaded to the app
];
