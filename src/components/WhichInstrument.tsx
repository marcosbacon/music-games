import { useState, useMemo } from 'react';

function WhichInstrument () {
  const items = ["piano", "guitar"];
  const answer = useMemo(() => Math.random() > 0.5 ? items[0] : items[1], []);
  const [result, setResult] = useState("Standby...");

  return (
    <>  
      <h1>Which One?</h1>
      <ul className="list-group d-flex flex-row bd-highlight mb-3">
        {items.map((item) => (
          <li 
            className="d-inline-flex p-2 bd-highlight"
            key={item}
            onClick={() => 
              item == answer ? setResult("Correct!") : setResult("Wrong!") }
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
