/** @format */

import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="container">
      <h1>Simple React Counter</h1>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
      <button className="btn" onClick={() => setValue(0)}>
        Reset
      </button>
      <button
        className="btn"
        onClick={() => setValue(value > 0 ? value - 1 : 0)}
      >
        Decrease
      </button>
    </div>
  );
}
export default App;
