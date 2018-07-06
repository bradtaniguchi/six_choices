import { MyGame } from './game';

console.log('client loaded, starting game');

(window as any).game = new MyGame();
