import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {count} nuclear warheads have been launched!!!
        </p>
        <button onClick={() => {setCount(count + 1)}}>
          Launch Warhead
        </button>
      </header>
    </div>
  );
}

export default App;
