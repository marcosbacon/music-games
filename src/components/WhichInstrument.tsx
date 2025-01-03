import { useState, useMemo } from 'react';
import instruments, { Instrument } from "./InstrumentsData";
import "./WhichInstrument.module.css";
import GameboyBackground from "./GameboyBackground";

function WhichInstrument () {
  const answer = useMemo(
    () => instruments[Math.floor(Math.random() * instruments.length)],
    []
  );
  const [result, setResult] = useState("Standby...");
  const [gameStarted, setGameStarted] = useState(false); // Track if the game has started.

  const handleStartGame = () => {
    setGameStarted(true);
    const audio = new Audio(answer.sound);
    audio.play().catch((err) => console.error("Audio playback failed:", err));
  };

  return (
    <>
      {/*<GameboyBackground />*/}
      {!gameStarted ? (
        <button onClick={handleStartGame} className="btn btn-primary">
          Start Game
        </button>
      ) : (
      <>
        <h1>Which One?</h1>
        <ul className="list-group d-flex flex-row bd-highlight mb-3">
          {instruments.map((instrument) => (
            <li
              className="d-inline-flex p-2 bd-highlight"
              key={instrument.name}
              onClick={() =>
                instrument.name === answer.name
                  ? setResult("Correct!")
                  : setResult("Wrong!") }
            >
              <button className="btn">
                {instrument.name}
                <img
                  src={instrument.image}
                  alt={instrument.name}
                  className="instrument-image"
                  width={150}
                />
              </button>
            </li>
          ))}
        </ul>
        <h2>Opção Correta: {answer.name}</h2>
        <h2>Resultado: {result}</h2>
      </>
      )}
    </>
  )
}

export default WhichInstrument;

