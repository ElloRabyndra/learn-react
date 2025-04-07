import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handlePlus() {
    setCount((count) => count + 1);
  }

  function handleMinus() {
    setCount((count) => count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <>
      <h1 className="text-center font-bold m-8">Halo, Saya Ello Rabyndra 👋</h1>
      <div className="card flex justify-center gap-3">
        <button
          onClick={handleMinus}
          className="px-8 py-2 rounded-xl border border-gray-500 hover:border-blue-300 active:border-blue-400 bg-zinc-800 font-bold text-2xl"
        >
          -
        </button>
        <p className="px-4 py-2 font-semibold text-xl">Count is {count}</p>
        <button
          onClick={handlePlus}
          className="px-8 py-2 rounded-xl border border-gray-500 hover:border-blue-300 active:border-blue-400 bg-zinc-800 font-bold text-2xl"
        >
          +
        </button>
      </div>
      <button
        onClick={handleReset}
        className="m-2 px-8 py-2 rounded-xl border border-gray-500 hover:border-blue-300 active:border-blue-400 bg-zinc-800 font-bold text-xl"
      >
        Reset
      </button>
    </>
  );
}

export default App;
