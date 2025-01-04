export interface Instrument {
  name: string;
  image: string;
  sound: string;
}

const instruments: Instrument[] = [
  {
    name: "Piano",
    image: "/music-games/assets/instruments/piano.png",
    sound: "/music-games/assets/instruments/piano.wav",
  },
  {
    name: "Guitar",
    image: "/music-games/assets/instruments/guitar.png",
    sound: "/music-games/assets/instruments/guitar.wav",
  },
  {
    name: "Drums",
    image: "/music-games/assets/instruments/drums.png",
    sound: "/music-games/assets/instruments/drums.wav",
  },
  {
    name: "Cello",
    image: "/music-games/assets/instruments/cello.png",
    sound: "/music-games/assets/instruments/cello.mp3",
  },
  {
    name: "Harp",
    image: "/music-games/assets/instruments/harp.png",
    sound: "/music-games/assets/instruments/harp.wav",
  },
  {
    name: "Xylophone",
    image: "/music-games/assets/instruments/xylophone.png",
    sound: "/music-games/assets/instruments/xylophone.wav",
  },
];

export default instruments;
