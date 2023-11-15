
import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0)

  function minus() {
    setCount(count - 1)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center pt-28">
        Счетчик
      </h1>
      <p className="text-9xl font-semibold text-center pt-10">{count}</p>
      <div className="flex justify-center pt-10 gap-6">
        <Button title={"Отнять -1"} onClick={minus} />
        <Button title={"Прибавить +1"} onClick={() => setCount(count + 1)} />
      </div>
    </div>
  );
}

export default App;
