import { useState } from 'react';
import Cell from './Cell';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill().map(() => Array(9).fill(0)));
  const [moves, setmoves] = useState([]);

  return (
    <div className='App'>
      <div className="grid">
        {
          Array(9).fill().map((_, row) =>
            <div key={row} className='row'>
              {
                Array(9).fill().map((_, col) => (
                  <Cell key={col} row={row} col={col} board={board} setBoard={setBoard} />
                ))
              }
            </div>
          )
        }
      </div>
      {/* <button>
        Go back
      </button>
      <button onClick={() => setBoard(Array(9).fill().map(() => Array(9).fill(0)))}>
        Restart
      </button> */}
    </div>
  );
}

export default App;
