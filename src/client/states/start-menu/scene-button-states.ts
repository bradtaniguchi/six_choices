export interface SceneButtonState {
  name: string;
  x: number;
  y: number;
}
export const SCENE_BUTTON_STATES: Array<SceneButtonState> = [
  {
    name: 'Start',
    x: 40,
    y: 30,
  },
  {
    name: 'Tutorial',
    x: 220,
    y: 30,
  },
  {
    name: 'Leaderboard',
    x: 40,
    y: 110,
  },
  {
    name: 'Who is playing',
    x: 220,
    y: 110,
  },
];
