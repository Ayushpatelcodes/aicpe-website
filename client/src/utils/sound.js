export const playClick = () => {
  const audio = new Audio("/click.mp3");
  audio.volume = 0.3;
  audio.play();
};