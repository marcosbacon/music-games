export interface Instrument {
  name: string;
  image: string;
  sound: string;
}

const instruments: Instrument[] = [
  {
    name: "Piano",
    image: "../assets/instruments/piano.png",
    sound: "../assets/instruments/piano.wav",
  },
  {
    name: "Guitar",
    image: "../assets/instruments/guitar.png",
    sound: "../assets/instruments/guitar.wav",
  },
  {
    name: "Drums",
    image: "../assets/instruments/drums.png",
    sound: "../assets/instruments/drums.wav",
  },
  {
    name: "Cello",
    image: "../assets/instruments/cello.png",
    sound: "../assets/instruments/cello.mp3",
  },
  {
    name: "Harp",
    image: "../assets/instruments/harp.png",
    sound: "../assets/instruments/harp.wav",
  },
  {
    name: "Xylophone",
    image: "../assets/instruments/xylophone.png",
    sound: "../assets/instruments/xylophone.wav",
  },
];

export default instruments;
