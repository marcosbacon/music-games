import { useState, useMemo } from 'react';
import instruments, { Instrument } from "./InstrumentsData";

function WhichInstrument () {
  const answer = useMemo(
    () => instruments[Math.floor(Math.random() * instruments.length)],
    []
  );
  const [result, setResult] = useState("Standby...");

  return (
    <>  
      <h1>Which One?</h1>
      <ul className="list-group d-flex flex-row bd-highlight mb-3">
        {items.map((instruments) => (
          <li 
            className="d-inline-flex p-2 bd-highlight"
            key={instrument.name}
            onClick={() => 
              instruments.name === answer.name
                ? setResult("Correct!") 
                : setResult("Wrong!") }
          >
            <button className="btn btn-light">{item}</button>
          </li>
        ))} 
      </ul>
      <h2>Opção Correta: {answer}</h2>
      <h2>Resultado: {result}</h2>
    </> 
  )
}

export default WhichInstrument;
